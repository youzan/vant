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

test('should change option color when using the color prop', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      show: true,
      actions: [{ name: 'Option', color: 'red' }],
    },
  });

  expect(wrapper.find('.van-action-sheet__item').element.style.color).toEqual(
    'red'
  );
});

test('should hide close icon when the closeable prop is false', async () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      show: true,
      title: 'Title',
    },
  });

  expect(wrapper.find('.van-action-sheet__close').exists()).toBeTruthy();

  wrapper.setProps({ closeable: false });
  await later();
  expect(wrapper.find('.van-action-sheet__close').exists()).toBeFalsy();
});

test('should allow to custom close icon with closeIcon prop', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      show: true,
      title: 'Title',
      closeIcon: 'cross',
    },
  });

  expect(wrapper.find('.van-action-sheet__close').html()).toMatchSnapshot();
});

test('should render description and match snapshot', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      show: true,
      description: 'This is a description',
    },
  });

  expect(
    wrapper.find('.van-action-sheet__description').html()
  ).toMatchSnapshot();
});

test('should render description slot when match snapshot', () => {
  const wrapper = mount(ActionSheet, {
    propsData: {
      show: true,
    },
    slots: {
      description: () => 'Custom Description',
    },
  });

  expect(
    wrapper.find('.van-action-sheet__description').html()
  ).toMatchSnapshot();
});
