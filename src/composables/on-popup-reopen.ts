import { inject, InjectionKey, watch } from 'vue';

// eslint-disable-next-line
export const POPUP_TOGGLE_KEY: InjectionKey<() => boolean> = Symbol();

export function onPopupReopen(callback: () => void) {
  const popupToggleStatus = inject(POPUP_TOGGLE_KEY, null);

  if (popupToggleStatus) {
    watch(popupToggleStatus, (show) => {
      if (show) {
        callback();
      }
    });
  }
}
