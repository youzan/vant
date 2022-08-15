import { inject, InjectionKey, Ref } from 'vue';

// eslint-disable-next-line
export const POPUP_REF_KEY: InjectionKey<Ref<HTMLElement>> = Symbol();

export const usePopupRef = () => inject(POPUP_REF_KEY, null);
