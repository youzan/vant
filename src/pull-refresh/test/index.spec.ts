import { PullRefresh } from '..';
import {
  mount,
  later,
  trigger,
  triggerDrag,
  mockScrollTop,
} from '../../../test';

test('should render different head content in different pulling status', async () => {
  const wrapper = mount(PullRefresh);
  const track = wrapper.find('.van-pull-refresh__track');

  // pulling
  trigger(track, 'touchstart', 0, 0);
  trigger(track, 'touchmove', 0, 20);
  await later();
  expect(wrapper.html()).toMatchSnapshot();

  // loosing
  trigger(track, 'touchmove', 0, 100);
  await later();
  expect(wrapper.html()).toMatchSnapshot();

  // loading
  trigger(track, 'touchend', 0, 100);
  await later();
  expect(wrapper.html()).toMatchSnapshot();

  // still loading
  triggerDrag(track, 0, 100);
  await later();
  expect(wrapper.html()).toMatchSnapshot();

  expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  expect(wrapper.emitted('refresh')).toBeTruthy();

  // // end loading
  await wrapper.setProps({ modelValue: true });
  await wrapper.setProps({ modelValue: false });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render status slots correctly', async () => {
  const wrapper = mount(PullRefresh, {
    slots: {
      pulling({ distance }) {
        return `pulling ${distance}`;
      },
      loosing({ distance }) {
        return `loosing ${distance}`;
      },
      loading({ distance }) {
        return `loading ${distance}`;
      },
    },
  });

  const track = wrapper.find('.van-pull-refresh__track');

  // pulling
  trigger(track, 'touchstart', 0, 0);
  trigger(track, 'touchmove', 0, 20);
  await later();
  expect(wrapper.html()).toMatchSnapshot();

  // loosing
  trigger(track, 'touchmove', 0, 75);
  trigger(track, 'touchmove', 0, 100);
  await later();
  expect(wrapper.html()).toMatchSnapshot();

  // loading
  trigger(track, 'touchend', 0, 100);
  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should not emit update:modelValue event after pulling a short distance', () => {
  const wrapper = mount(PullRefresh);
  const track = wrapper.find('.van-pull-refresh__track');
  triggerDrag(track, 0, 10);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should not trigger pull refresh when not in page top', async () => {
  const wrapper = mount(PullRefresh);
  const track = wrapper.find('.van-pull-refresh__track');

  // ignore touch event when not at page top
  await mockScrollTop(1);
  triggerDrag(track, 0, 100);
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();

  await mockScrollTop(0);
  triggerDrag(track, 0, 100);
  expect(wrapper.emitted('update:modelValue')).toBeTruthy();
});

test('should render success text correctly', async () => {
  const wrapper = mount(PullRefresh, {
    props: {
      successText: 'success',
      successDuration: 0,
    },
  });

  const track = wrapper.find('.van-pull-refresh__track');
  triggerDrag(track, 0, 100);

  await later();

  // loading
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);
  await wrapper.setProps({ modelValue: true });

  // success
  await wrapper.setProps({ modelValue: false });
  expect(wrapper.html()).toMatchSnapshot();

  // normal
  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render success slot correctly', async () => {
  const wrapper = mount(PullRefresh, {
    slots: {
      success: () => 'Custom Success',
    },
  });

  // loading
  const track = wrapper.find('.van-pull-refresh__track');
  triggerDrag(track, 0, 100);
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);
  await wrapper.setProps({ modelValue: true });

  // success
  await wrapper.setProps({ modelValue: false });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should set height when using head-height', async () => {
  const wrapper = mount(PullRefresh, {
    props: {
      headHeight: 100,
    },
  });
  const head = wrapper.find('.van-pull-refresh__head');
  expect(head.style.height).toEqual('100px');
});

test('should allow to custom pull distance', async () => {
  const wrapper = mount(PullRefresh, {
    props: {
      pullDistance: 300,
    },
  });
  const track = wrapper.find('.van-pull-refresh__track');

  trigger(track, 'touchstart', 0, 0);
  trigger(track, 'touchmove', 0, 100);
  await later();
  expect(wrapper.html()).toMatchSnapshot();
});
