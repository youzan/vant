export type FieldValidateTrigger = 'onSubmit' | 'onChange' | 'onBlur';

export type FieldRule = {
  pattern?: RegExp;
  trigger?: FieldValidateTrigger;
  message?: string | ((value: unknown, rule: FieldRule) => string);
  required?: boolean;
  validator?: (value: unknown, rule: FieldRule) => boolean | Promise<boolean>;
  formatter?: (value: unknown, rule: FieldRule) => unknown;
};

function isEmptyValue(value: unknown) {
  if (Array.isArray(value)) {
    return !value.length;
  }
  if (value === 0) {
    return false;
  }
  return !value;
}

export function runSyncRule(value: unknown, rule: FieldRule) {
  if (rule.required && isEmptyValue(value)) {
    return false;
  }
  if (rule.pattern && !rule.pattern.test(String(value))) {
    return false;
  }
  return true;
}
