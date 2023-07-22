import { useRect } from '@vant/use';
import { Ref, ref, onMounted, nextTick, watch } from 'vue';
import { windowHeight, windowWidth } from '../utils';
import { onPopupReopen } from './on-popup-reopen';

export const useHeight = (
  element: Element | Ref<Element | undefined>,
  withSafeArea?: boolean,
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

  // The result of useHeight might be 0 when the popup is hidden,
  // so we need to reset the height when the popup is reopened.
  // IntersectionObserver is a better solution, but it is not supported by legacy browsers.
  // https://github.com/vant-ui/vant/issues/10628
  onPopupReopen(() => nextTick(setHeight));

  // The height of the element may change when the window is resized
  // https://github.com/youzan/vant/issues/11325
  watch([windowWidth, windowHeight], setHeight);

  return height;
};
