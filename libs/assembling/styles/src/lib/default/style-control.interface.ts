import {
  BasicTokenNames,
  NonBasicTokenNames,
  TOKEN_NAMES,
} from '@idl/tokenizer';

/**
 * Basic control tokens to format
 */
export const BASIC_CONTROL: BasicTokenNames[] = [
  TOKEN_NAMES.CONTROL_BREAK,
  TOKEN_NAMES.CONTROL_CONTINUE,
  TOKEN_NAMES.CONTROL_JUMP,
  TOKEN_NAMES.EXECUTIVE_COMMAND,
  TOKEN_NAMES.CONTROL_OPTION,
];

/**
 * Nonbasic control names to process
 */
export const BRANCH_CONTROL: NonBasicTokenNames[] = [
  TOKEN_NAMES.BLOCK,
  TOKEN_NAMES.CONTROL,
  TOKEN_NAMES.CONTROL_COMMON,
  TOKEN_NAMES.CONTROL_COMPILE_OPT,
  TOKEN_NAMES.CONTROL_FORWARD_FUNCTION,
  TOKEN_NAMES.CONTROL_GO_TO,
  TOKEN_NAMES.CONTROL_ON_IOERROR,
  TOKEN_NAMES.LOGICAL,
  TOKEN_NAMES.LOGICAL_CASE,
  TOKEN_NAMES.LOGICAL_CASE_SWITCH_THEN,
  TOKEN_NAMES.LOGICAL_ELSE,
  TOKEN_NAMES.LOGICAL_EXPRESSION,
  TOKEN_NAMES.LOGICAL_EXPRESSION_DEFAULT,
  TOKEN_NAMES.LOGICAL_IF,
  TOKEN_NAMES.LOGICAL_OF,
  TOKEN_NAMES.LOGICAL_SWITCH,
  TOKEN_NAMES.LOGICAL_TERNARY_ELSE,
  TOKEN_NAMES.LOGICAL_TERNARY_THEN,
  TOKEN_NAMES.LOGICAL_THEN,
  TOKEN_NAMES.LOOP,
  TOKEN_NAMES.LOOP_DO,
  TOKEN_NAMES.LOOP_FOR,
  TOKEN_NAMES.LOOP_FOREACH,
  TOKEN_NAMES.LOOP_REPEAT,
  TOKEN_NAMES.LOOP_UNTIL,
  TOKEN_NAMES.LOOP_WHILE,
  TOKEN_NAMES.MAIN_LEVEL,
  TOKEN_NAMES.OPERATOR,
  TOKEN_NAMES.OPERATOR_COMPOUND,
  TOKEN_NAMES.OPERATOR_INCREMENT_DECREMENT,
  TOKEN_NAMES.OPERATOR_LOGICAL,
  TOKEN_NAMES.ROUTINE_FUNCTION,
  TOKEN_NAMES.ROUTINE_PROCEDURE,
];
