import { inBrowser } from '@vant/use';

export const hasIntersectionObserver =
  inBrowser &&
  'IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype;

export const modeType = {
  event: 'event',
  observer: 'observer',
};

export function remove(arr, item) {
  if (!arr.length) return;
  const index = arr.indexOf(item);
  if (index > -1) return arr.splice(index, 1);
}

export function getBestSelectionFromSrcset(el, scale) {
  if (el.tagName !== 'IMG' || !el.getAttribute('data-srcset')) return;

  let options = el.getAttribute('data-srcset');
  const container = el.parentNode;
  const containerWidth = container.offsetWidth * scale;

  let spaceIndex;
  let tmpSrc;
  let tmpWidth;

  options = options.trim().split(',');

  const result = options.map((item) => {
    item = item.trim();
    spaceIndex = item.lastIndexOf(' ');
    if (spaceIndex === -1) {
      tmpSrc = item;
      tmpWidth = 999998;
    } else {
      tmpSrc = item.substr(0, spaceIndex);
      tmpWidth = parseInt(
        item.substr(spaceIndex + 1, item.length - spaceIndex - 2),
        10
      );
    }
    return [tmpWidth, tmpSrc];
  });

  result.sort((a, b) => {
    if (a[0] < b[0]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] === b[0]) {
      if (b[1].indexOf('.webp', b[1].length - 5) !== -1) {
        return 1;
      }
      if (a[1].indexOf('.webp', a[1].length - 5) !== -1) {
        return -1;
      }
    }
    return 0;
  });
  let bestSelectedSrc = '';
  let tmpOption;

  for (let i = 0; i < result.length; i++) {
    tmpOption = result[i];
    bestSelectedSrc = tmpOption[1];
    const next = result[i + 1];
    if (next && next[0] < containerWidth) {
      bestSelectedSrc = tmpOption[1];
      break;
    } else if (!next) {
      bestSelectedSrc = tmpOption[1];
      break;
    }
  }

  return bestSelectedSrc;
}

export const getDPR = (scale = 1) =>
  inBrowser ? window.devicePixelRatio || scale : scale;

export function supportWebp() {
  if (!inBrowser) return false;

  let support = true;

  try {
    const elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
      support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
  } catch (err) {
    support = false;
  }

  return support;
}

export function throttle(action, delay) {
  let timeout = null;
  let lastRun = 0;
  return function (...args) {
    if (timeout) {
      return;
    }
    const elapsed = Date.now() - lastRun;
    const runCallback = () => {
      lastRun = Date.now();
      timeout = false;
      action.apply(this, args);
    };
    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
  };
}

export function on(el, type, func) {
  el.addEventListener(type, func, {
    capture: false,
    passive: true,
  });
}

export function off(el, type, func) {
  el.removeEventListener(type, func, false);
}

export const loadImageAsync = (item, resolve, reject) => {
  const image = new Image();

  if (!item || !item.src) {
    const err = new Error('image src is required');
    return reject(err);
  }

  image.src = item.src;
  if (item.cors) {
    image.crossOrigin = item.cors;
  }

  image.onload = () =>
    resolve({
      naturalHeight: image.naturalHeight,
      naturalWidth: image.naturalWidth,
      src: image.src,
    });

  image.onerror = (e) => reject(e);
};

export function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

export function noop() {}

export class ImageCache {
  constructor({ max }) {
    this.options = {
      max: max || 100,
    };
    this._caches = [];
  }

  has(key) {
    return this._caches.indexOf(key) > -1;
  }

  add(key) {
    if (this.has(key)) return;
    this._caches.push(key);
    if (this._caches.length > this.options.max) {
      this.free();
    }
  }

  free() {
    this._caches.shift();
  }
}
