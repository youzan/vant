import { inject, ComputedRef } from 'vue';

// eslint-disable-next-line
export const TAB_STATUS_KEY = Symbol();

export function useTabStatus() {
  return inject<ComputedRef<boolean> | null>(TAB_STATUS_KEY, null);
}
