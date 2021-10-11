import { ref, Ref } from 'vue';
import { inBrowser } from '../utils';
import { useEventListener } from '../useEventListener';

let width: Ref<number>;
let height: Ref<number>;

export function useWindowSize() {
  if (!width) {
    width = ref(0);
    height = ref(0);

    const update = () => {
      if (inBrowser) {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      }
    };

    update();
    useEventListener('resize', update);
    useEventListener('orientationchange', update);
  }

  return { width, height };
}
