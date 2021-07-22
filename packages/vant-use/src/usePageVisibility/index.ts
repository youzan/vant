import { ref } from 'vue';
import { inBrowser } from '../utils';
import { useEventListener } from '../useEventListener';

export function usePageVisibility() {
  const visibility = ref<VisibilityState>('visible');

  const setVisibility = () => {
    if (inBrowser) {
      visibility.value = document.hidden ? 'hidden' : 'visible';
    }
  };

  setVisibility();
  useEventListener('visibilitychange', setVisibility);

  return visibility;
}
