import { inBrowser } from '../utils';
import {
  Ref,
  onMounted,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
} from 'vue';

export function useVisibilityChange(
  target: Ref<Element>,
  onChange: () => void
) {
  // compatibility: https://caniuse.com/#feat=intersectionobserver
  if (!inBrowser || !window.IntersectionObserver) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      // visibility changed
      if (entries[0].intersectionRatio > 0) {
        onChange();
      }
    },
    { root: document.body }
  );

  const observe = () => {
    observer.observe(target.value);
  };

  const unobserve = () => {
    observer.unobserve(target.value);
  };

  onMounted(observe);
  onActivated(observe);
  onDeactivated(unobserve);
  onBeforeUnmount(unobserve);
}
