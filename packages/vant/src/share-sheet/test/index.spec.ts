import { ShareSheet } from '..';
import { mount, trigger, later } from '../../../test';

test('should render cancel text when using cancel-text prop', async () => {
  const wrapper = mount(ShareSheet, {
    props: {
      show: true,
      cancelText: 'foo',
    },
  });

  expect(wrapper.find('.van-share-sheet__cancel').html()).toMatchSnapshot();

  await wrapper.setProps({ cancelText: '' });
  expect(wrapper.find('.van-share-sheet__cancel').exists()).toBeFalsy();
});

test('should render description when using description prop', async () => {
  const wrapper = mount(ShareSheet, {
    props: {
      show: true,
      description: 'foo',
    },
  });

  expect(
    wrapper.find('.van-share-sheet__description').html()
  ).toMatchSnapshot();

  await wrapper.setProps({ description: '' });
  expect(wrapper.find('.van-share-sheet__description').exists()).toBeFalsy();
});

test('should allow to custom the className of option', () => {
  const wrapper = mount(ShareSheet, {
    props: {
      show: true,
      options: [{ name: 'Link', icon: 'link', className: 'foo' }],
    },
  });

  const option = wrapper.find('.van-share-sheet__option').element;

  expect(option.className.includes('foo')).toBeTruthy();
});

test('should emit select event when an option is clicked', () => {
  const wrapper = mount(ShareSheet, {
    props: {
      show: true,
      options: [{ icon: 'wechat', name: 'wechat' }],
    },
  });

  wrapper.find('.van-share-sheet__option').trigger('click');
  expect(wrapper.emitted('select')![0]).toEqual([
    { icon: 'wechat', name: 'wechat' },
    0,
  ]);
});

test('should emit cancel event when the cancel button is clicked', () => {
  const wrapper = mount(ShareSheet, {
    props: {
      show: true,
    },
  });

  wrapper.find('.van-share-sheet__cancel').trigger('click');

  expect(wrapper.emitted('update:show')![0]).toEqual([false]);
  expect(wrapper.emitted('cancel')![0]).toBeTruthy();
});

test('should render title and description slot correctly', () => {
  const wrapper = mount(ShareSheet, {
    props: {
      show: true,
    },
    slots: {
      title: () => 'Custom Title',
      description: () => 'Custom Description',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit click-overlay event when overlay is clicked', async () => {
  const root = document.createElement('div');
  const onClickOverlay = jest.fn();
  const wrapper = mount(ShareSheet, {
    props: {
      show: true,
      teleport: root,
      onClickOverlay,
    },
  });

  await later();

  const overlay = root.querySelector('.van-overlay')!;
  trigger(overlay, 'click');
  expect(onClickOverlay).toHaveBeenCalledTimes(1);
  expect(wrapper.emitted('update:show')![0]).toEqual([false]);
});

test('should render cancel slot correctly', async () => {
  const wrapper = mount(ShareSheet, {
    props: {
      show: true,
    },
    slots: {
      cancel: () => 'Custom Cancel',
    },
  });

  expect(wrapper.find('.van-share-sheet__cancel').html()).toMatchSnapshot();
});

test('should have "van-popup--round" class when setting the round prop', async () => {
  const wrapper = mount(ShareSheet, {
    props: {
      show: true,
      round: true,
    },
  });

  expect(wrapper.find('.van-popup--round').exists()).toBeTruthy();

  await wrapper.setProps({ round: false });
  expect(wrapper.find('.van-popup--round').exists()).toBeFalsy();
});
