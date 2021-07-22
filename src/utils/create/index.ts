import { createBEM } from './bem';
import { createTranslate } from './translate';

export function createNamespace(name: string) {
  const prefixedName = `van-${name}`;
  return [
    prefixedName,
    createBEM(prefixedName),
    createTranslate(prefixedName),
  ] as const;
}
