import { createBEM } from './bem';
import { createComponent } from './component';
import { createI18N } from './i18n';

type CreateNamespaceReturn = [
  ReturnType<typeof createComponent>,
  ReturnType<typeof createBEM>,
  ReturnType<typeof createI18N>
];

export function createNamespace(name: string): CreateNamespaceReturn {
  name = 'van-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}
