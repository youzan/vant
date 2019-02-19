import { useBEM } from './bem';
import { useSFC } from './sfc';
import { useI18N } from './i18n';

type UseReturn = [
  ReturnType<typeof useSFC>,
  ReturnType<typeof useBEM>,
  ReturnType<typeof useI18N>
];

export function use(name: string): UseReturn {
  name = 'van-' + name;
  return [useSFC(name), useBEM(name), useI18N(name)];
}
