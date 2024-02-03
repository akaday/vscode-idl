import { IDLIndex } from '@idl/parsing/index';
import { GlobalTokenType } from '@idl/types/core';
import { existsSync, mkdirSync, rmSync } from 'fs';
import { join } from 'path';
import { DefaultTheme } from 'vitepress';

import { GLOBAL_TYPE_PATHS } from './folder-map.interface';
import { GetDisplayName } from './get-display-name';
import { ShouldExportItem } from './should-export-item';
import { WriteFile } from './write-file';

/**
 * Exports docs fro a given folder from our application
 */
export async function IDLDocsExporter(
  index: IDLIndex,
  outDir: string,
  globs: string[],
  exclude: string[]
): Promise<void> {
  /**
   * Get the things we need to export
   */
  const toExport = index.globalIndex.export(globs, exclude);

  /**
   * Get the types of global tokens that we need to export
   */
  const exportTypes = Object.keys(toExport) as GlobalTokenType[];

  /**
   * Get folder we export to
   */
  const exportDir = join(outDir, 'api');

  /**
   * Delete the folder if it exists
   */
  if (existsSync(exportDir)) {
    rmSync(exportDir, { recursive: true });
  }

  // make sure the output folder exists if it doesnt
  mkdirSync(exportDir, { recursive: true });

  /**
   * Process each type we export
   */
  for (let i = 0; i < exportTypes.length; i++) {
    /**
     * Get tokens for type that we need to export
     */
    const forType = toExport[exportTypes[i]];

    /** Create sidebar for our items */
    let sidebar: DefaultTheme.NavItemWithLink[] = [];

    /** */
    const indexFile: string[] = ['# Contents', ''];

    /** Get starting length */
    const initLength = indexFile.length;

    // process each item
    for (let j = 0; j < forType.length; j++) {
      /** Get item we save */
      const item = forType[j];

      // make sure we should export our item
      if (!ShouldExportItem(item)) {
        continue;
      }

      /**
       * Get display name
       */
      const display = GetDisplayName(item);

      /** Make relative link */
      const relative = `/${GLOBAL_TYPE_PATHS[exportTypes[i]]}/${item.name
        .toLowerCase()
        .replace(/:/g, '_')}.md`;

      // add to index file
      indexFile.push(`[${display}](${relative})`);
      indexFile.push('');

      /** Specify the folder */
      const outUri = join(exportDir, relative);

      WriteFile(outUri, `# ${GetDisplayName(item)}\n\n${item.meta.docs}`);

      // add sidebar entry
      sidebar.push({
        text: item.meta.display,
        link: relative,
      });
    }

    /** Sort sidebar alphabetically */
    sidebar = sidebar.sort((a, b) =>
      a.text > b.text ? 1 : b.text > a.text ? -1 : 0
    );

    // write index file if we have it
    if (indexFile.length > initLength) {
      /** Make relative link */
      const relative = `/${GLOBAL_TYPE_PATHS[exportTypes[i]]}/index.md`;

      /** Specify the folder */
      const outUri = join(exportDir, relative);

      // write content
      WriteFile(outUri, indexFile.join('\n'));
    }
  }
}
