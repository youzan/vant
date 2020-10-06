import { ref } from 'vue';
import { inBrowser } from '../utils';
import { useEventListener } from '../useEventListener';

export function useWindowSize() {
  const width = ref(inBrowser ? window.innerWidth : 0);
  const height = ref(inBrowser ? window.innerHeight : 0);

  const onResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  useEventListener('resize', onResize);
  useEventListener('orientationchange', onResize);

  return { width, height };
}
