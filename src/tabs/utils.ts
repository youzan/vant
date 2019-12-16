import { raf } from '../utils/dom/raf';
import { getRootScrollTop, setRootScrollTop } from '../utils/dom/scroll';

export function scrollLeftTo(el: HTMLElement, to: number, duration: number) {
  let count = 0;
  const from = el.scrollLeft;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      raf(animate);
    }
  }

  animate();
}

export function scrollTopTo(to: number, duration: number, cb: Function) {
  let current = getRootScrollTop();
  const toDown = current < to;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
  const pxPerFrames = (to - current) / frames;

  function animate() {
    current += pxPerFrames;

    if ((toDown && current > to) || (!toDown && current < to)) {
      current = to;
    }

    setRootScrollTop(current);

    if ((toDown && current < to) || (!toDown && current > to)) {
      raf(animate);
    } else {
      cb && cb();
    }
  }

  animate();
}
