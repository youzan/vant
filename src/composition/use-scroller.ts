import { Ref, ref, onMounted } from 'vue';
import { getScroller } from '../utils/dom/scroll';

export function useScroller(el: Ref<HTMLElement>) {
  const scrollerRef = ref();

  onMounted(() => {
    if (el.value) {
      scrollerRef.value = getScroller(el.value);
    }
  });

  return scrollerRef;
}
