import { raf, cancelRaf } from '@vant/use';
import { ScrollElement, getScrollTop, setScrollTop } from '../utils';

let scrollLeftToRafId: number;
let scrollTopToRafId: number;

export function scrollLeftTo(
  scroller: HTMLElement,
  to: number,
  duration: number
) {
  cancelRaf(scrollLeftToRafId);

  let count = 0;
  const from = scroller.scrollLeft;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

  function animate() {
    scroller.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      scrollLeftToRafId = raf(animate);
    }
  }

  animate();
}

export function scrollTopTo(
  scroller: ScrollElement,
  to: number,
  duration: number,
  callback: () => void
) {
  cancelRaf(scrollTopToRafId);

  let current = getScrollTop(scroller);
  const isDown = current < to;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
  const step = (to - current) / frames;

  function animate() {
    current += step;

    if ((isDown && current > to) || (!isDown && current < to)) {
      current = to;
    }

    setScrollTop(scroller, current);

    if ((isDown && current < to) || (!isDown && current > to)) {
      scrollTopToRafId = raf(animate);
    } else if (callback) {
      scrollTopToRafId = raf(callback as FrameRequestCallback);
    }
  }

  animate();
}
