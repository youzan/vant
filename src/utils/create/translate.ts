import { get, isFunction } from '../base';
import { camelize } from '../format/string';
import locale from '../../locale';

export function createTranslate(name: string) {
  const prefix = camelize(name) + '.';

  return function (path: string, ...args: any[]): any {
    const messages = locale.messages();
    const message = get(messages, prefix + path) || get(messages, path);

    return isFunction(message) ? message(...args) : message;
  };
}

export type Translate = ReturnType<typeof createTranslate>;
