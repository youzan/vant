import useBem from './bem';
import useSfc from './sfc';
import useI18n from './i18n';

type UseReturn = [
  ReturnType<typeof useSfc>,
  ReturnType<typeof useBem>,
  ReturnType<typeof useI18n>
];

export function use(name: string): UseReturn {
  name = 'van-' + name;
  return [useSfc(name), useBem(name), useI18n(name)];
}
