import { nextTick } from 'vue';
import BackTop from '..';
import { mount, trigger } from '../../../test';

test('should allow to custom position by position prop', async () => {
  const root = document.createElement('div');
  mount(BackTop, {
    props: {
      right: 30,
      bottom: 100,
      zIndex: 200,
      teleport: root,
    },
  });
  const backTopEl = root.querySelector<HTMLDivElement>('.van-back-top')!;
  expect(backTopEl.style.right).toBe('30px');
  expect(backTopEl.style.bottom).toBe('100px');
  expect(backTopEl.style.zIndex).toBe('200');
});

test('should allow position prop to contain unit', async () => {
  const root = document.createElement('div');
  mount(BackTop, {
    props: {
      right: '2rem',
      bottom: '4rem',
      teleport: root,
    },
  });
  const backTopEl = root.querySelector<HTMLDivElement>('.van-back-top')!;
  expect(backTopEl.style.right).toBe('2rem');
  expect(backTopEl.style.bottom).toBe('4rem');
});

test('should emit click event after clicked', async () => {
  const windowScroll = vi.fn();
  window.scrollTo = windowScroll;

  const root = document.createElement('div');
  const wrapper = mount(BackTop, {
    props: {
      teleport: root,
    },
  });
  const backTopEl = root.querySelector<HTMLDivElement>('.van-back-top')!;
  await nextTick();
  await trigger(backTopEl, 'click');

  expect(wrapper.emitted('click')?.length).toEqual(1);
  expect(windowScroll).toHaveBeenCalledTimes(1);
});
