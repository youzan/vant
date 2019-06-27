import Vue from 'vue';

export { createNamespace } from './create';
export { suffixPx } from './format/unit';

export const isServer: boolean = Vue.prototype.$isServer;

export function noop() {}

export function isDef(value: any): boolean {
  return value !== undefined && value !== null;
}

export function isObj(x: any): boolean {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export function get(object: any, path: string): any {
  const keys = path.split('.');
  let result = object;

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}
