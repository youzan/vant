import { PropType, ComponentPublicInstance } from 'vue';

export function noop() {}

export const extend = Object.assign;

export const inBrowser = typeof window !== 'undefined';

// PropTypes
export const unknownProp = (null as unknown) as PropType<unknown>;
export const truthProp = {
  type: Boolean,
  default: true as const,
};

// eslint-disable-next-line
export type ComponentInstance = ComponentPublicInstance<{}, any>;

export function get(object: any, path: string): any {
  const keys = path.split('.');
  let result = object;

  keys.forEach((key) => {
    result = result[key] ?? '';
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
