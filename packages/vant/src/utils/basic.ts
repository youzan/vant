import { isObject } from './validate';
import type { ComponentPublicInstance } from 'vue';

export function noop() {}

export const extend = Object.assign;

export const inBrowser = typeof window !== 'undefined';

export type Numeric = number | string;

// eslint-disable-next-line
export type ComponentInstance = ComponentPublicInstance<{}, any>;

export function get(object: any, path: string): any {
  const keys = path.split('.');
  let result = object;

  keys.forEach((key) => {
    result = isObject(result) ? result[key] ?? '' : '';
  });

  return result;
}

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export function pick<T, U extends keyof T>(
  obj: T,
  keys: ReadonlyArray<U>,
  ignoreUndefined?: boolean
) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      ret[key] = obj[key];
    }
    return ret;
  }, {} as Writeable<Pick<T, U>>);
}

export const isSameValue = (newValue: unknown, oldValue: unknown) =>
  JSON.stringify(newValue) === JSON.stringify(oldValue);

export const toArray = <T>(item: T | T[]): T[] =>
  Array.isArray(item) ? item : [item];
