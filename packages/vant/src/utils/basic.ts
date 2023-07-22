import type { ComponentPublicInstance } from 'vue';

export function noop() {}

export const extend = Object.assign;

export const inBrowser = typeof window !== 'undefined';

export type Numeric = number | string;

// eslint-disable-next-line
export type ComponentInstance = ComponentPublicInstance<{}, any>;

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object';

export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null;

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function';

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  isObject(val) && isFunction(val.then) && isFunction(val.catch);

export const isDate = (val: unknown): val is Date =>
  Object.prototype.toString.call(val) === '[object Date]' &&
  !Number.isNaN((val as Date).getTime());

export function isMobile(value: string): boolean {
  value = value.replace(/[^-|\d]/g, '');
  return (
    /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value)
  );
}

export const isNumeric = (val: Numeric): val is string =>
  typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);

export const isIOS = (): boolean =>
  inBrowser
    ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
    : false;

export function get(object: any, path: string): any {
  const keys = path.split('.');
  let result = object;

  keys.forEach((key) => {
    result = isObject(result) ? result[key] ?? '' : '';
  });

  return result;
}

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type RequiredParams<T> = T extends (...args: infer P) => infer R
  ? (...args: { [K in keyof P]-?: NonNullable<P[K]> }) => R
  : never;

export function pick<T, U extends keyof T>(
  obj: T,
  keys: ReadonlyArray<U>,
  ignoreUndefined?: boolean,
) {
  return keys.reduce(
    (ret, key) => {
      if (!ignoreUndefined || obj[key] !== undefined) {
        ret[key] = obj[key];
      }
      return ret;
    },
    {} as Writeable<Pick<T, U>>,
  );
}

export const isSameValue = (newValue: unknown, oldValue: unknown) =>
  JSON.stringify(newValue) === JSON.stringify(oldValue);

export const toArray = <T>(item: T | T[]): T[] =>
  Array.isArray(item) ? item : [item];
