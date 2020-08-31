import { createApp, Component } from 'vue';

export { addUnit, getSizeStyle } from './format/unit';
export { createNamespace } from './create';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

export const inBrowser = typeof window !== 'undefined';

export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null;
}

// eslint-disable-next-line @typescript-eslint/ban-types
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

export function pick(obj: Record<string, any>, keys: string[]) {
  return keys.reduce((ret, key) => {
    ret[key] = obj[key];
    return ret;
  }, {} as Record<string, any>);
}

export function mountComponent(RootComponent: Component) {
  const app = createApp(RootComponent);
  const root = document.createElement('div');

  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount(root);
      document.body.removeChild(root);
    },
  };
}
