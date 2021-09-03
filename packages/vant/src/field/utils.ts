import { HTMLAttributes, InputHTMLAttributes } from 'vue';
import {
  trigger,
  isObject,
  isPromise,
  isFunction,
  getRootScrollTop,
  setRootScrollTop,
} from '../utils';
import type { FieldRule, FieldType, FieldAutosizeConfig } from './types';

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

export function runRuleValidator(value: unknown, rule: FieldRule) {
  return new Promise((resolve) => {
    const returnVal = rule.validator!(value, rule);

    if (isPromise(returnVal)) {
      return returnVal.then(resolve);
    }

    resolve(returnVal);
  });
}

export function getRuleMessage(value: unknown, rule: FieldRule) {
  const { message } = rule;

  if (isFunction(message)) {
    return message(value, rule);
  }
  return message || '';
}

export function startComposing(event: Event) {
  event.target!.composing = true;
}

export function endComposing(event: Event) {
  const { target } = event;
  if (target!.composing) {
    target!.composing = false;
    trigger(target as Element, 'input');
  }
}

export function resizeTextarea(
  input: HTMLInputElement,
  autosize: true | FieldAutosizeConfig
) {
  const scrollTop = getRootScrollTop();
  input.style.height = 'auto';

  let height = input.scrollHeight;
  if (isObject(autosize)) {
    const { maxHeight, minHeight } = autosize;
    if (maxHeight !== undefined) {
      height = Math.min(height, maxHeight);
    }
    if (minHeight !== undefined) {
      height = Math.max(height, minHeight);
    }
  }

  if (height) {
    input.style.height = `${height}px`;
    // https://github.com/youzan/vant/issues/9178
    setRootScrollTop(scrollTop);
  }
}

export function mapInputType(type: FieldType): {
  type: InputHTMLAttributes['type'];
  inputmode?: HTMLAttributes['inputmode'];
} {
  // type="number" is weird in iOS, and can't prevent dot in Android
  // so use inputmode to set keyboard in modern browsers
  if (type === 'number') {
    return {
      type: 'text',
      inputmode: 'decimal',
    };
  }

  if (type === 'digit') {
    return {
      type: 'tel',
      inputmode: 'numeric',
    };
  }

  return { type };
}
