import { TextMateParse } from '@idl/test-helpers';

describe(`[auto generated] Verify string literal escape characters`, () => {
  it(`[auto generated] for syntax highlighting`, async () => {
    // test code to extract tokens from
    const code = [
      `compile_opt idl2`,
      `a = \`\\\`\``,
      `a = \`\\$\``,
      `a = \`\\\\\``,
      `a = \`\\b\``,
      `a = \`\\f\``,
      `a = \`\\n\``,
      `a = \`\\r\``,
      `a = \`\\t\``,
      `a = \`\\v\``,
      `a = \`\\x00 \\XaF\``,
      `a = \`\\a \``,
      `end`,
    ];

    // extract tokens
    const tokenized = await TextMateParse(code);

    // define expected tokens
    const expected = [
      {
        line: 0,
        match: 'compile_opt',
        startIndex: 0,
        endIndex: 11,
        scopes: [
          'source.idl',
          'group.control.compound.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 0,
        match: 'idl2',
        startIndex: 12,
        endIndex: 16,
        scopes: [
          'source.idl',
          'group.control.compound.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 1,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 1,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 1,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 1,
        match: '\\`',
        startIndex: 5,
        endIndex: 7,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 1,
        match: '`',
        startIndex: 7,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 2,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 2,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 2,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 2,
        match: '\\$',
        startIndex: 5,
        endIndex: 7,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 2,
        match: '`',
        startIndex: 7,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 3,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 3,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 3,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 3,
        match: '\\\\',
        startIndex: 5,
        endIndex: 7,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 3,
        match: '`',
        startIndex: 7,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 4,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 4,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 4,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 4,
        match: '\\b',
        startIndex: 5,
        endIndex: 7,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 4,
        match: '`',
        startIndex: 7,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 5,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 5,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 5,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 5,
        match: '\\f',
        startIndex: 5,
        endIndex: 7,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 5,
        match: '`',
        startIndex: 7,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 6,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 6,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 6,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 6,
        match: '\\n',
        startIndex: 5,
        endIndex: 7,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 6,
        match: '`',
        startIndex: 7,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 7,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 7,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 7,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 7,
        match: '\\r',
        startIndex: 5,
        endIndex: 7,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 7,
        match: '`',
        startIndex: 7,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 8,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 8,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 8,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 8,
        match: '\\t',
        startIndex: 5,
        endIndex: 7,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 8,
        match: '`',
        startIndex: 7,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 9,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 9,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 9,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 9,
        match: '\\v',
        startIndex: 5,
        endIndex: 7,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 9,
        match: '`',
        startIndex: 7,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 10,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 10,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 10,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 10,
        match: '\\x00',
        startIndex: 5,
        endIndex: 9,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 10,
        match: ' ',
        startIndex: 9,
        endIndex: 10,
        scopes: ['source.idl', 'group.assignment.idl', 'string.template.idl'],
      },
      {
        line: 10,
        match: '\\XaF',
        startIndex: 10,
        endIndex: 14,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 10,
        match: '`',
        startIndex: 14,
        endIndex: 15,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 11,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 11,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 11,
        match: '`',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 11,
        match: '\\',
        startIndex: 5,
        endIndex: 6,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'constant.character.escape.idl',
        ],
      },
      {
        line: 11,
        match: 'a ',
        startIndex: 6,
        endIndex: 8,
        scopes: ['source.idl', 'group.assignment.idl', 'string.template.idl'],
      },
      {
        line: 11,
        match: '`',
        startIndex: 8,
        endIndex: 9,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'string.template.idl',
          'string.template.idl',
        ],
      },
      {
        line: 12,
        match: 'end',
        startIndex: 0,
        endIndex: 3,
        scopes: ['source.idl', 'keyword.control.idl'],
      },
    ];
    expect(expected).toEqual(tokenized);
  });
});