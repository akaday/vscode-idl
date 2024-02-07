import {
  IDL_SYNTAX_TREE_VALIDATOR,
  SyntaxProblemWithTranslation,
} from '@idl/parsing/syntax-tree';
import { TOKEN_NAMES } from '@idl/parsing/tokenizer';
import { IDL_PROBLEM_CODES } from '@idl/types/problem-codes';

import { IsSingleLine } from '../helpers/is-single-line';

/**
 * Check if our main level program has an "end"
 *
 * Do this because we have a custom post-processor that makes
 * it
 */
IDL_SYNTAX_TREE_VALIDATOR.onBranchToken(
  TOKEN_NAMES.MAIN_LEVEL,
  (token, parsed, meta) => {
    // dont validate if we have a notebook
    if (meta.isNotebook) {
      return;
    }

    /**
     * Check for a missing end statement
     */
    if (token.end === undefined) {
      if (IsSingleLine(token)) {
        return;
      }

      /**
       * More than one line between start and end, so lets report our problem
       */
      token.parseProblems.push(IDL_PROBLEM_CODES.MISSING_MAIN_END);
      const pos =
        token.kids.length > 0
          ? token.kids[token.kids.length - 1].pos
          : token.pos;
      parsed.parseProblems.push(
        SyntaxProblemWithTranslation(
          IDL_PROBLEM_CODES.MISSING_MAIN_END,
          [pos[0], 0, Number.MAX_VALUE],
          [pos[0], 0, Number.MAX_VALUE]
        )
      );
    }
  }
);
