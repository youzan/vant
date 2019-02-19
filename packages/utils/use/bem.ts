/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

const ELEMENT = '__';
const MODS = '--';

function join(name: string, el?: string, symbol?: string): string {
  return el ? name + symbol + el : name;
}

function prefix(name: string, mods: Mods): Mods {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(item => <Mod>prefix(name, item));
  }

  const ret: Mods = {};
  if (mods) {
    Object.keys(mods).forEach(key => {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

export const useBEM = (name: string) => (el?: Mods, mods?: Mods): Mods => {
  if (el && typeof el !== 'string') {
    mods = el;
    el = '';
  }
  el = join(name, el, ELEMENT);

  return mods ? [el, prefix(el, mods)] : el;
};
