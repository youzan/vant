import { useRect } from '@vant/use';
import { Ref, ref, onMounted, nextTick } from 'vue';
import { onPopupReopen } from './on-popup-reopen';

export const useHeight = (
  element: Element | Ref<Element | undefined>,
  withSafeArea?: boolean
) => {
  const height = ref<number>();

  const setHeight = () => {
    height.value = useRect(element).height;
  };

  onMounted(() => {
    nextTick(setHeight);

    // If the element is using safe area, the system will not return the correct height on page load.
    // So we need to wait for the height to be set.
    // https://github.com/vant-ui/vant/issues/10131
    // https://stackoverflow.com/questions/64891541
    if (withSafeArea) {
      for (let i = 1; i <= 3; i++) {
        setTimeout(setHeight, 100 * i);
      }
    }
  });

  onPopupReopen(() => nextTick(setHeight));

  return height;
};
