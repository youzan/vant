import Vue from 'vue';

export { use } from './use';

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

const camelizeRE = /-(\w)/g;
export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

export function isAndroid(): boolean {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

export function isIOS(): boolean {
  /* istanbul ignore next */
  return isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}

export function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

export function isInDocument(element: HTMLElement): boolean {
  return document.body.contains(element);
}
