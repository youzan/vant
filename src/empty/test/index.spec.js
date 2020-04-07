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
