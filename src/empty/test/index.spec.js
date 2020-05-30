import Empty from '..';
import { mount } from '../../../test';

test('image slot', () => {
  const wrapper = mount(Empty, {
    scopedSlots: {
      image: () => 'Custom Image',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('description slot', () => {
  const wrapper = mount(Empty, {
    scopedSlots: {
      description: () => 'Custom description',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('bottom slot', () => {
  const wrapper = mount(Empty, {
    scopedSlots: {
      default: () => 'Custom bottom',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('render svg when image is network', () => {
  const wrapper = mount(Empty, {
    propsData: {
      image: 'network',
    },
  });

  expect(wrapper).toMatchSnapshot();
});
