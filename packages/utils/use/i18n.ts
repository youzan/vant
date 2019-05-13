import { get, camelize } from '..';
import locale from '../../locale';

export function useI18N(name: string) {
  const prefix = camelize(name) + '.';

  return function (path: string, ...args: any[]): string {
    const message = get(locale.messages(), prefix + path) || get(locale.messages(), path);
    return typeof message === 'function' ? message(...args) : message;
  };
}
