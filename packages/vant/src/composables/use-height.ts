import { useRect } from '@vant/use';
import { Ref, ref, onMounted, nextTick } from 'vue';

export const useHeight = (element: Element | Ref<Element | undefined>) => {
  const height = ref<number>();

  onMounted(() => {
    nextTick(() => {
      height.value = useRect(element).height;
    });
    // https://github.com/youzan/vant/issues/10131
    setTimeout(() => {
      height.value = useRect(element).height;
    }, 100);
  });

  return height;
};
