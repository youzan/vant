import { raf, cancelRaf } from '../utils/dom/raf';
import { getRootScrollTop, setRootScrollTop } from '../utils/dom/scroll';

let scrollLeftRafId: number;

export function scrollLeftTo(el: HTMLElement, to: number, duration: number) {
  cancelRaf(scrollLeftRafId);

  let count = 0;
  const from = el.scrollLeft;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      scrollLeftRafId = raf(animate);
    }
  }

  animate();
}

export function scrollTopTo(to: number, duration: number, cb: Function) {
  let current = getRootScrollTop();
  const isDown = current < to;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
  const step = (to - current) / frames;

  function animate() {
    current += step;

    if ((isDown && current > to) || (!isDown && current < to)) {
      current = to;
    }

    setRootScrollTop(current);

    if ((isDown && current < to) || (!isDown && current > to)) {
      raf(animate);
    } else {
      cb && cb();
    }
  }

  animate();
}
