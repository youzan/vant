import { get } from './basic';
import { camelize } from './format';
import { isFunction } from './validate';
import locale from '../locale';

export function createTranslate(name: string) {
  const prefix = camelize(name) + '.';

  return (path: string, ...args: any[]): any => {
    const messages = locale.messages();
    const message = get(messages, prefix + path) || get(messages, path);

    return isFunction(message) ? message(...args) : message;
  };
}

export type Translate = ReturnType<typeof createTranslate>;

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

function genBem(name: string, mods?: Mods): string {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string>((ret, item) => ret + genBem(name, item), '');
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genBem(name, key) : ''),
    ''
  );
}

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
export function createBEM(name: string) {
  return (el?: Mods, mods?: Mods): Mods => {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? `${name}__${el}` : name;

    return `${el}${genBem(el, mods)}`;
  };
}

export type BEM = ReturnType<typeof createBEM>;

export function createNamespace(name: string) {
  const prefixedName = `van-${name}`;
  return [
    prefixedName,
    createBEM(prefixedName),
    createTranslate(prefixedName),
  ] as const;
}
