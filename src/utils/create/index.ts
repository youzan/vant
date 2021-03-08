import { createBEM } from './bem';
import { createTranslate } from './translate';

export function createNamespace(name: string) {
  name = 'van-' + name;
  return [name, createBEM(name), createTranslate(name)] as const;
}
