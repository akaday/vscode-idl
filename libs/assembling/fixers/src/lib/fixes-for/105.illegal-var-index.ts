import { ASSEMBLER_PROBLEM_FIXERS } from '@idl/assembling/tree-handlers';
import { IDL_PROBLEM_CODES } from '@idl/parsing/problem-codes';
import { TOKEN_NAMES } from '@idl/parsing/tokenizer';

import { HasProblem } from '../helpers/has-problem';

ASSEMBLER_PROBLEM_FIXERS.onBranchToken(TOKEN_NAMES.BRACKET, (token, parsed) => {
  if (
    HasProblem(
      token,
      IDL_PROBLEM_CODES.ILLEGAL_VARIABLE_INDEX,
      parsed.disabledProblems
    )
  ) {
    token.match[0] = '[';
    if (token.end !== undefined) {
      token.end.match[0] = ']';
    }
  }
});
