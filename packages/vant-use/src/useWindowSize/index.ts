import { ref } from 'vue';
import { inBrowser } from '../shared';
import { useEventListener } from '../useEventListener';

export function useWindowSize(initialWidth = 0, initialHeight = 0) {
  const width = ref(inBrowser ? window.innerWidth : initialWidth);
  const height = ref(inBrowser ? window.innerHeight : initialHeight);

  const onResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  useEventListener('resize', onResize);
  useEventListener('orientationchange', onResize);

  return { width, height };
}
