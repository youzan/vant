import { nextTick } from 'vue';
import { trigger } from './event';

function mockHTMLElementOffset() {
  Object.defineProperties(HTMLElement.prototype, {
    offsetParent: {
      get() {
        return this.parentNode || {};
      },
    },
    offsetLeft: {
      get() {
        return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
      },
    },
    offsetTop: {
      get() {
        return parseFloat(window.getComputedStyle(this).marginTop) || 0;
      },
    },
    offsetHeight: {
      get() {
        return parseFloat(window.getComputedStyle(this).height) || 0;
      },
    },
    offsetWidth: {
      get() {
        return parseFloat(window.getComputedStyle(this).width) || 0;
      },
    },
  });
}

export function mockScrollIntoView() {
  const fn = jest.fn();
  Element.prototype.scrollIntoView = fn;
  return fn;
}

export function mockGetBoundingClientRect(rect: Partial<DOMRect>): () => void {
  const spy = jest.spyOn(Element.prototype, 'getBoundingClientRect');
  spy.mockReturnValue(rect as DOMRect);
  return () => spy.mockRestore();
}

export async function mockScrollTop(value: number) {
  Object.defineProperty(window, 'scrollTop', { value, writable: true });
  trigger(window, 'scroll');
  return nextTick();
}

mockScrollIntoView();
mockHTMLElementOffset();
