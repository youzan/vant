import { DOMWrapper } from '@vue/test-utils/dist/domWrapper';
import { trigger } from '../../../test';

export const images = [
  'https://img.yzcdn.cn/1.png',
  'https://img.yzcdn.cn/2.png',
  'https://img.yzcdn.cn/3.png',
];

function triggerTwoFingerTouchmove(
  el: Element | DOMWrapper<Element>,
  x: number,
  y: number
) {
  trigger(el, 'touchmove', -x, -y, { x, y });
}

export function triggerZoom(
  el: Element | DOMWrapper<Element>,
  x: number,
  y: number,
  direction = 'in'
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
