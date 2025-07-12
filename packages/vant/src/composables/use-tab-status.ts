import { inject, ComputedRef, InjectionKey, provide, computed } from 'vue';

export const TAB_STATUS_KEY: InjectionKey<ComputedRef<boolean>> = Symbol();

export const ALL_TAB_STATUS_KEY: InjectionKey<ComputedRef<boolean>> = Symbol();

export const useTabStatus = () => inject(TAB_STATUS_KEY, null);

export const useAllTabStatus = () => inject(ALL_TAB_STATUS_KEY, null);

export const useProvideTabStatus = (status: ComputedRef<boolean>) => {
  const allTabStatus = useAllTabStatus();
  provide(TAB_STATUS_KEY, status);

  provide(
    ALL_TAB_STATUS_KEY,
    computed(() => {
      return (allTabStatus == null || allTabStatus.value) && status.value;
    }),
  );
};
