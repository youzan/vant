import { createBEM, BEM } from './bem';
import { createComponent } from './component';
import { createI18N, Translate } from './i18n';

type CreateNamespaceReturn = [
  ReturnType<typeof createComponent>,
  BEM,
  Translate
];

export function createNamespace(name: string): CreateNamespaceReturn {
  name = 'van-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}
