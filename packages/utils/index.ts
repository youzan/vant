import Vue from 'vue';
import { isNumber } from './validate/number';

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

export function suffixPx(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumber(value) ? `${value}px` : value;
}

export function padZero(num: number | string): string {
  return (num < 10 ? '0' : '') + num;
}
