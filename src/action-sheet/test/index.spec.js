import { mount } from '@vue/test-utils';
import { later } from '../../../test';
import ActionSheet from '..';

test('should render content after disabling the lazy-render prop', async () => {
  const wrapper = mount(ActionSheet);
  expect(wrapper.find('.van-action-sheet__content').exists()).toBeFalsy();

  wrapper.setProps({ lazyRender: false });
  await later();
  expect(wrapper.find('.van-action-sheet__content').exists()).toBeTruthy();
});

test('should render default slot and match snapshot', () => {
  const wrapper = mount(ActionSheet, {
    props: {
      show: true,
      title: 'Title',
    },
    slots: {
      default: () => 'Default',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to use the teleport prop', () => {
  const root = document.createElement('div');
  mount(ActionSheet, {
    propsData: {
      show: true,
      teleport: root,
    },
  });

  expect(root.querySelector('.van-action-sheet')).toBeTruthy();
});

test('should have "van-popup--round" class when setting the round prop', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      show: true,
      round: true,
    },
  });

  expect(wrapper.find('.van-popup--round').exists()).toBeTruthy();
});
