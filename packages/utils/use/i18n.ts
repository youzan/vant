import { get, camelize } from '..';
import { lang, messages } from '../../locale';

export default (name: string) => {
  const prefix = camelize(name) + '.';
  return (path: string, ...args: any[]): string => {
    const message = get(messages[lang], prefix + path) || get(messages[lang], path);
    return typeof message === 'function' ? message(...args) : message;
  };
};
