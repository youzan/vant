import Badge from '..';
import { mount } from '@vue/test-utils';

test('should render nothing when content is empty string', () => {
  const wrapper = mount(Badge, {
    propsData: {
      content: '',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when content is undefined', () => {
  const wrapper = mount(Badge, {
    propsData: {
      content: undefined,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when content is zero', () => {
  const wrapper = mount(Badge, {
    propsData: {
      content: 0,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render content slot correctly', () => {
  const wrapper = mount(Badge, {
    scopedSlots: {
      content: () => 'Custom Content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
