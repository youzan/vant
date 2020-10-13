import Badge from '..';
import { mount } from '../../../test';

test('should not render when badge is empty string', () => {
  const wrapper = mount(Badge, {
    propsData: {
      badge: '',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('should not render when badge is empty undefined', () => {
  const wrapper = mount(Badge, {
    propsData: {
      badge: undefined,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('should render when badge is zero', () => {
  const wrapper = mount(Badge, {
    propsData: {
      badge: 0,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
