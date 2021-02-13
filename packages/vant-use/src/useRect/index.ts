import { Ref, unref } from 'vue';

function isWindow(val: unknown): val is Window {
  return val === window;
}

export const useRect = (
  elementRef: (Element | Window) | Ref<Element | Window | undefined>
) => {
  const element = unref(elementRef);

  if (isWindow(element)) {
    const width = element.innerWidth;
    const height = element.innerHeight;
    return new DOMRect(0, 0, width, height);
  }

  if (element && element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }

  return new DOMRect(0, 0, 0, 0);
};
