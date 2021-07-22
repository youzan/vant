import { inject, ComputedRef, InjectionKey } from 'vue';

// eslint-disable-next-line
export const TAB_STATUS_KEY: InjectionKey<ComputedRef<boolean>> = Symbol();

export function useTabStatus() {
  return inject(TAB_STATUS_KEY, null);
}
