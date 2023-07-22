import { raf, cancelRaf } from '@vant/use';
import { ScrollElement, getScrollTop, setScrollTop } from '../utils';

export function scrollLeftTo(
  scroller: HTMLElement,
  to: number,
  duration: number,
) {
  let rafId: number;
  let count = 0;
  const from = scroller.scrollLeft;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

  function cancel() {
    cancelRaf(rafId);
  }

  function animate() {
    scroller.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      rafId = raf(animate);
    }
  }

  animate();

  return cancel;
}

export function scrollTopTo(
  scroller: ScrollElement,
  to: number,
  duration: number,
  callback: () => void,
) {
  let rafId: number;
  let current = getScrollTop(scroller);
  const isDown = current < to;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
  const step = (to - current) / frames;

  function cancel() {
    cancelRaf(rafId);
  }

  function animate() {
    current += step;

    if ((isDown && current > to) || (!isDown && current < to)) {
      current = to;
    }

    setScrollTop(scroller, current);

    if ((isDown && current < to) || (!isDown && current > to)) {
      rafId = raf(animate);
    } else if (callback) {
      rafId = raf(callback as FrameRequestCallback);
    }
  }

  animate();

  return cancel;
}
