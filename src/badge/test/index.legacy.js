import Badge from '..';
import { mount } from '@vue/test-utils';

test('should not render when badge is empty string', () => {
  const wrapper = mount(Badge, {
    propsData: {
      badge: '',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should not render when badge is empty undefined', () => {
  const wrapper = mount(Badge, {
    propsData: {
      badge: undefined,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render when badge is zero', () => {
  const wrapper = mount(Badge, {
    propsData: {
      badge: 0,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
