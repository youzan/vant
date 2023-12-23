import { nextTick } from 'vue';
import { DOMWrapper } from '@vue/test-utils/dist/domWrapper';
import { cdnURL } from '../../../docs/site';
import { trigger, triggerDrag } from '../../../test';

export const images = [
  cdnURL('apple-1.jpeg'),
  cdnURL('apple-2.jpeg'),
  cdnURL('apple-3.jpeg'),
];

function triggerTwoFingerTouchmove(
  el: Element | DOMWrapper<Element>,
  x: number,
  y: number,
) {
  trigger(el, 'touchmove', -x, -y, { x, y });
}

export function triggerZoom(
  el: Element | DOMWrapper<Element>,
  x: number,
  y: number,
  direction = 'in',
) {
  trigger(el, 'touchstart', 0, 0, { x, y });

  if (direction === 'in') {
    triggerTwoFingerTouchmove(el, x / 4, y / 4);
    triggerTwoFingerTouchmove(el, x / 3, y / 3);
    triggerTwoFingerTouchmove(el, x / 2, y / 2);
    triggerTwoFingerTouchmove(el, x, y);
  } else if (direction === 'out') {
    triggerTwoFingerTouchmove(el, x, y);
    triggerTwoFingerTouchmove(el, x / 2, y / 2);
    triggerTwoFingerTouchmove(el, x / 3, y / 3);
    triggerTwoFingerTouchmove(el, x / 4, y / 4);
  }

  trigger(el, 'touchend', 0, 0, { touchList: [] });
}

export function triggerDoubleTap(
  el: HTMLElement | DOMWrapper<Element>,
  x: number = 0,
  y: number = 0,
) {
  triggerDrag(el, x, y);
  triggerDrag(el, x, y);

  return nextTick();
}
