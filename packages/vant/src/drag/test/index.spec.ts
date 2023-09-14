import Drag from '..';

import { later, mount, triggerDrag } from '../../../test';

test('should render correctly when drag element', async () => {
  const wrapper = mount(Drag, {
    slots: {
      default: 'text',
    },
  });
  const drag = wrapper.find('.van-drag');
  expect(drag.exists()).toBeTruthy();

  await triggerDrag(wrapper, 100, 100);

  expect(drag.style.top).toBe('100px');
  expect(drag.style.left).toBe('100px');
});

test('should free direction move and  magnetic to x axios when magnetic is "x"', async () => {
  const wrapper = mount(Drag, {
    props: {
      magnetic: 'x',
    },
    slots: {
      default: 'text',
    },
  });
  const drag = wrapper.find('.van-drag');
  expect(drag.exists()).toBeTruthy();

  await triggerDrag(drag, 100, 100);

  await later(400);

  expect(drag.style.top).toBe('0px');
  expect(drag.style.left).toBe('0px');
});

test('should free direction move and set boundary', async () => {
  const wrapper = mount(Drag, {
    props: {
      boundary: {
        top: 100,
        left: 0,
        right: 100,
      },
    },
    slots: {
      default: 'text',
    },
  });
  const drag = wrapper.find('.van-drag');
  expect(drag.exists()).toBeTruthy();

  await triggerDrag(drag, 200, 100);

  expect(drag.style.top).toBe('100px');
  expect(drag.style.left).toBe('100px');
});

test('should emit event', async () => {
  const fn1 = vi.fn();
  const fn2 = vi.fn();
  const fn3 = vi.fn();
  const fn4 = vi.fn();
  const wrapper = mount(Drag, {
    props: {
      onDragStart: fn1,
      onDragEnd: fn2,
      onDrag: fn3,
      onOffsetChange: fn4,
    },
    slots: {
      default: 'text',
    },
  });

  const drag = wrapper.find('.van-drag');
  expect(drag.exists()).toBeTruthy();

  await triggerDrag(drag, 200, 200);

  expect(fn1).toBeCalled();
  expect(fn2).toBeCalled();
  expect(fn3).toBeCalled();
  expect(fn4).toBeCalled();
});
