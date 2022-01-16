import { useRect } from '@vant/use';
import { Ref, ref, onMounted, nextTick } from 'vue';

export const useHeight = (element: Element | Ref<Element | undefined>) => {
  const height = ref<number>();

  const setHeight = () => {
    height.value = useRect(element).height;
  };

  onMounted(() => {
    nextTick(setHeight);
    // https://github.com/youzan/vant/issues/10131
    setTimeout(setHeight, 100);
  });

  return height;
};
