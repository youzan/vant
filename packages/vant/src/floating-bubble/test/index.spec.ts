import { useWindowSize } from '@vant/use';
import FloatingBubble from '..';

import {
  later,
  mockGetBoundingClientRect,
  mount,
  trigger,
  triggerDrag,
} from '../../../test';

test('should render correctly when all props set', async () => {
  useWindowSize();
  const restore = mockGetBoundingClientRect({ width: 48, height: 48 });

  const root = document.createElement('div');
  const wrapper = mount(FloatingBubble, {
    props: {
      teleport: root,
    },
  });

  const floatingBubbleEl = root.querySelector<HTMLDivElement>(
    '.van-floating-bubble',
  )!;

  await later();

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${window.innerWidth - 48 - 24}px, ${
      window.innerHeight - 48 - 24
    }px, 0)`,
  );

  await wrapper.setProps({
    gap: 50,
  });

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${window.innerWidth - 48 - 50}px, ${
      window.innerHeight - 48 - 50
    }px, 0)`,
  );

  await wrapper.setProps({
    offset: {
      x: 400,
      y: 400,
    },
  });

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${400}px, ${400}px, 0)`,
  );

  await wrapper.setProps({
    icon: 'chat',
  });

  expect(floatingBubbleEl.querySelector('.van-icon-chat')).not.toBeNull();

  restore();
});

test('should only y axis direction move when axis is default', async () => {
  const restore = mockGetBoundingClientRect({ width: 48, height: 48 });

  const root = document.createElement('div');
  mount(FloatingBubble, {
    props: {
      teleport: root,
    },
  });

  const floatingBubbleEl = root.querySelector<HTMLDivElement>(
    '.van-floating-bubble',
  )!;

  await triggerDrag(floatingBubbleEl, -100, -100);

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${window.innerWidth - 48 - 24}px, ${
      window.innerHeight - 48 - 24 - 100
    }px, 0)`,
  );

  restore();
});

test('should only x axis direction adn emit offsetChange move when axis is "x" ', async () => {
  const restore = mockGetBoundingClientRect({ width: 48, height: 48 });

  const root = document.createElement('div');
  const wrapper = mount(FloatingBubble, {
    props: {
      teleport: root,
      axis: 'x',
    },
  });

  const floatingBubbleEl = root.querySelector<HTMLDivElement>(
    '.van-floating-bubble',
  )!;

  await triggerDrag(floatingBubbleEl, -100, -100);

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${window.innerWidth - 48 - 24 - 100}px, ${
      window.innerHeight - 48 - 24
    }px, 0)`,
  );

  expect(wrapper.emitted('offsetChange')?.[0][0]).toEqual({
    x: window.innerWidth - 48 - 24 - 100,
    y: window.innerHeight - 48 - 24,
  });

  restore();
});

test('should free direction move when axis is "xy" ', async () => {
  const restore = mockGetBoundingClientRect({ width: 48, height: 48 });

  const root = document.createElement('div');
  mount(FloatingBubble, {
    props: {
      teleport: root,
      axis: 'xy',
    },
  });

  const floatingBubbleEl = root.querySelector<HTMLDivElement>(
    '.van-floating-bubble',
  )!;

  await triggerDrag(floatingBubbleEl, -100, -100);

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${window.innerWidth - 48 - 24 - 100}px, ${
      window.innerHeight - 48 - 24 - 100
    }px, 0)`,
  );

  restore();
});

test('should free direction move when axis is "xy" ', async () => {
  const restore = mockGetBoundingClientRect({ width: 48, height: 48 });

  const root = document.createElement('div');
  mount(FloatingBubble, {
    props: {
      teleport: root,
      axis: 'xy',
    },
  });

  const floatingBubbleEl = root.querySelector<HTMLDivElement>(
    '.van-floating-bubble',
  )!;

  await triggerDrag(floatingBubbleEl, -100, -100);

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${window.innerWidth - 48 - 24 - 100}px, ${
      window.innerHeight - 48 - 24 - 100
    }px, 0)`,
  );

  restore();
});

test('should free direction move and  magnetic to x axios when magnetic is "x" ', async () => {
  vi.useFakeTimers();

  const restore = mockGetBoundingClientRect({ width: 48, height: 48 });
  const root = document.createElement('div');
  mount(FloatingBubble, {
    props: {
      teleport: root,
      axis: 'xy',
      magnetic: 'x',
    },
  });

  const floatingBubbleEl = root.querySelector<HTMLDivElement>(
    '.van-floating-bubble',
  )!;

  await triggerDrag(floatingBubbleEl, -100, -100);
  await vi.advanceTimersByTimeAsync(400);

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${window.innerWidth - 48 - 24}px, ${
      window.innerHeight - 48 - 24 - 100
    }px, 0)`,
  );

  await triggerDrag(floatingBubbleEl, -600, -100);
  await vi.advanceTimersByTimeAsync(400);

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${24}px, ${window.innerHeight - 48 - 24 - 200}px, 0)`,
  );

  restore();
  vi.useRealTimers();
});

test('should offset control positioning when use v-model:offset ', async () => {
  vi.useFakeTimers();

  const restore = mockGetBoundingClientRect({ width: 48, height: 48 });
  const root = document.createElement('div');
  const wrapper = mount(FloatingBubble, {
    props: {
      teleport: root,
      axis: 'xy',
      offset: {
        x: 200,
        y: 200,
      },
    },
  });

  const floatingBubbleEl = root.querySelector<HTMLDivElement>(
    '.van-floating-bubble',
  )!;

  await triggerDrag(floatingBubbleEl, 100, 100);
  await vi.advanceTimersByTimeAsync(400);

  expect(floatingBubbleEl.style.transform).toEqual(
    `translate3d(${300}px, ${300}px, 0)`,
  );

  const emitList = wrapper.emitted('update:offset');
  expect(emitList?.[emitList.length - 1][0]).toEqual({
    x: 300,
    y: 300,
  });

  restore();
  vi.useRealTimers();
});

test('should emit click when click wrapper', async () => {
  const root = document.createElement('div');
  const wrapper = mount(FloatingBubble, {
    props: {
      teleport: root,
      axis: 'xy',
      offset: {
        x: 200,
        y: 200,
      },
    },
  });

  await later();

  trigger(wrapper, 'click');

  expect(wrapper.emitted('click')).toBeFalsy();
});
