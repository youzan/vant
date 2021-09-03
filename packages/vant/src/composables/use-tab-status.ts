import { inject, ComputedRef, InjectionKey } from 'vue';

// eslint-disable-next-line
export const TAB_STATUS_KEY: InjectionKey<ComputedRef<boolean>> = Symbol();

export const useTabStatus = () => inject(TAB_STATUS_KEY, null);
