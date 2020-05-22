import Vue from 'vue';

export { createNamespace } from './create';
export { addUnit } from './format/unit';

export const isServer: boolean = Vue.prototype.$isServer;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null;
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function get(object: any, path: string): any {
  const keys = path.split('.');
  let result = object;

  keys.forEach((key) => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}
