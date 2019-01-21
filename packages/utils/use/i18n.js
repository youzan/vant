import { get, camelize } from '..';
import { lang, messages } from '../../locale';

export default name => {
  const prefix = camelize(name) + '.';
  return (path, ...args) => {
    const message = get(messages[lang], prefix + path) || get(messages[lang], path);
    return typeof message === 'function' ? message(...args) : message;
  };
};
