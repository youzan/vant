import { get, isFunction } from '..';
import { camelize } from '../format/string';
import locale from '../../locale';

export function createI18N(name: string) {
  const prefix = camelize(name) + '.';

  return function (path: string, ...args: any[]): string {
    const messages = locale.messages();
    const message = get(messages, prefix + path) || get(messages, path);

    return isFunction(message) ? message(...args) : message;
  };
}

export type Translate = ReturnType<typeof createI18N>;
