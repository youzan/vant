import useBem from './bem';
import useSfc from './sfc';
import useI18n from './i18n';

export default function (name) {
  name = 'van-' + name;
  return [useSfc(name), useBem(name), useI18n(name)];
}
