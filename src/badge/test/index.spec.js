import Badge from '..';
import { mount } from '@vue/test-utils';

test('should render nothing when content is empty string', () => {
  const wrapper = mount(Badge, {
    props: {
      content: '',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when content is undefined', () => {
  const wrapper = mount(Badge, {
    props: {
      content: undefined,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when content is zero', () => {
  const wrapper = mount(Badge, {
    props: {
      content: 0,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render content slot correctly', () => {
  const wrapper = mount(Badge, {
    slots: {
      content: () => 'Custom Content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
