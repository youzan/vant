import { useTouch } from './use-touch';
import { getScroller } from '../utils/dom/scroll';
import { on, off, preventDefault } from '../utils/dom/event';

let count = 0;
const CLASSNAME = 'van-overflow-hidden';

export function useLockScroll(element: HTMLElement) {
  const { start, move, deltaY, direction } = useTouch();

  function onTouchMove(event: TouchEvent) {
    move(event);

    if (direction.value !== 'vertical') {
      return;
    }

    let prevent = false;
    const up = deltaY.value < 0;
    const scroller = getScroller(event.target as HTMLElement, element);
    const { scrollTop, scrollHeight, offsetHeight } = scroller as HTMLElement;

    if (scrollTop === 0) {
      prevent = up && offsetHeight < scrollHeight;
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      prevent = !up;
    }

    if (prevent) {
      preventDefault(event, true);
    }
  }

  function lock() {
    if (!count) {
      document.body.classList.add(CLASSNAME);
    }

    count++;
    on(document, 'touchstart', start);
    on(document, 'touchmove', onTouchMove);
  }

  lock();

  return function unlock() {
    count--;
    off(document, 'touchstart', start);
    off(document, 'touchmove', onTouchMove);

    if (!count) {
      document.body.classList.remove(CLASSNAME);
    }
  };
}
