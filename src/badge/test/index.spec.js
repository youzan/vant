import Badge from '..';
import { mount } from '@vue/test-utils';

test('should render nothing when badge is empty string', () => {
  const wrapper = mount(Badge, {
    props: {
      badge: '',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when badge is undefined', () => {
  const wrapper = mount(Badge, {
    props: {
      badge: undefined,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when badge is zero', () => {
  const wrapper = mount(Badge, {
    props: {
      badge: 0,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render content slot and match snapshot', () => {
  const wrapper = mount(Badge, {
    slots: {
      content: () => 'Custom Content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
