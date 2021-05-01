import { inject, watch } from 'vue';

// eslint-disable-next-line
export const POPUP_TOGGLE_KEY = Symbol();

export function onPopupReopen(callback: () => void) {
  const popupToggleStatus = inject<(() => boolean) | null>(
    POPUP_TOGGLE_KEY,
    null
  );

  if (popupToggleStatus) {
    watch(popupToggleStatus, (show) => {
      if (show) {
        callback();
      }
    });
  }
}
