import PullRefresh from '..';
import { mount, later, trigger, triggerDrag } from '../../../test';

test('change head content when pulling down', async () => {
  const wrapper = mount(PullRefresh, {
    propsData: {
      value: false,
    },
    listeners: {
      input(value) {
        wrapper.setProps({ value });
      },
    },
  });

  const track = wrapper.find('.van-pull-refresh__track');

  // pulling
  trigger(track, 'touchstart', 0, 0);
  trigger(track, 'touchmove', 0, 20);
  expect(wrapper).toMatchSnapshot();

  // loosing
  trigger(track, 'touchmove', 0, 100);
  expect(wrapper).toMatchSnapshot();

  // loading
  trigger(track, 'touchend', 0, 100);
  expect(wrapper).toMatchSnapshot();

  // still loading
  triggerDrag(track, 0, 100);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.emitted('input')).toBeTruthy();
  expect(wrapper.emitted('refresh')).toBeFalsy();

  await later();
  expect(wrapper.emitted('refresh')).toBeTruthy();

  // end loading
  wrapper.vm.value = false;
  expect(wrapper).toMatchSnapshot();
});

test('custom content by slots', async () => {
  const wrapper = mount(PullRefresh, {
    scopedSlots: {
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
  expect(wrapper).toMatchSnapshot();

  // loosing
  trigger(track, 'touchmove', 0, 75);
  trigger(track, 'touchmove', 0, 100);
  expect(wrapper).toMatchSnapshot();

  // loading
  trigger(track, 'touchend', 0, 100);
  expect(wrapper).toMatchSnapshot();
});

test('pull a short distance', () => {
  const wrapper = mount(PullRefresh, {
    propsData: {
      value: false,
    },
  });

  const track = wrapper.find('.van-pull-refresh__track');
  triggerDrag(track, 0, 10);
  expect(wrapper.emitted('input')).toBeFalsy();
});

test('not in page top', () => {
  const wrapper = mount(PullRefresh, {
    propsData: {
      value: false,
    },
  });

  window.scrollTop = 100;

  const track = wrapper.find('.van-pull-refresh__track');
  // ignore touch event when not at page top
  triggerDrag(track, 0, 100);
  window.scrollTop = 0;
  trigger(track, 'touchmove', 0, 100);

  expect(wrapper).toMatchSnapshot();
});

test('render success text', async () => {
  const wrapper = mount(PullRefresh, {
    propsData: {
      successText: 'success',
      successDuration: 0,
    },
    listeners: {
      input(value) {
        wrapper.setProps({ value });
      },
    },
  });

  const track = wrapper.find('.van-pull-refresh__track');
  triggerDrag(track, 0, 100);

  await later();

  // loading
  expect(wrapper.vm.value).toBeTruthy();
  wrapper.setProps({ value: false });

  // success
  expect(wrapper).toMatchSnapshot();

  // normal
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('render success slot', async () => {
  const wrapper = mount(PullRefresh, {
    scopedSlots: {
      success: () => 'Custom Success',
    },
    listeners: {
      input(value) {
        wrapper.setProps({ value });
      },
    },
  });

  const track = wrapper.find('.van-pull-refresh__track');
  triggerDrag(track, 0, 100);

  await later();

  expect(wrapper.vm.value).toBeTruthy();
  wrapper.setProps({ value: false });
  expect(wrapper).toMatchSnapshot();
});

test('should set height when using head-height', async () => {
  const wrapper = mount(PullRefresh, {
    propsData: {
      headHeight: 100,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
