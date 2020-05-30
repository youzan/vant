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

export function mockGetBoundingClientRect(
  rect: ClientRect | DOMRect
): Function {
  const originMethod = Element.prototype.getBoundingClientRect;

  Element.prototype.getBoundingClientRect = <any>jest.fn(() => rect);

  return function () {
    Element.prototype.getBoundingClientRect = originMethod;
  };
}

export function mockScrollTop(value: number) {
  Object.defineProperty(window, 'scrollTop', { value, writable: true });
  trigger(window, 'scroll');
}

mockScrollIntoView();
mockHTMLElementOffset();
