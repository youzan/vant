import { getCurrentInstance } from 'vue';
import { noop } from '../utils';
import { createTranslate } from '../utils/create/translate';

export function useTranslate() {
  const { name } = getCurrentInstance()!.type;
  return name ? createTranslate(name) : noop;
}
