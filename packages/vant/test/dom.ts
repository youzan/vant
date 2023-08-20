import { nextTick } from 'vue';
import { trigger } from './event';
import { inBrowser } from '@vant/use';
import { vi } from 'vitest';

function mockHTMLElementOffset() {
  if (!inBrowser) {
    return;
  }

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
        return parseFloat(window.getComputedStyle(this).height) || 100;
      },
    },
    offsetWidth: {
      get() {
        return parseFloat(window.getComputedStyle(this).width) || 100;
      },
    },
  });
}

export function mockScrollIntoView() {
  const fn = vi.fn();
  if (inBrowser) {
    Element.prototype.scrollIntoView = fn;
  }
  return fn;
}

export function mockGetBoundingClientRect(rect: Partial<DOMRect>): () => void {
  if (inBrowser) {
    const spy = vi.spyOn(Element.prototype, 'getBoundingClientRect');
    spy.mockReturnValue(rect as DOMRect);
    return () => spy.mockRestore();
  }
  return () => {};
}

export async function mockScrollTop(value: number) {
  Object.defineProperty(window, 'scrollTop', { value, writable: true });
  trigger(window, 'scroll');
  return nextTick();
}

// js-dom do not implement `URL.createObjectURL`
global.URL.createObjectURL = vi.fn();

mockScrollIntoView();
mockHTMLElementOffset();
mockGetBoundingClientRect({
  width: 100,
  height: 100,
  top: 0,
  left: 0,
  right: 100,
  bottom: 100,
});
