import { mount } from '@vue/test-utils';
import Loading from '..';

test('size prop', () => {
  const wrapper = mount(Loading, {
    props: {
      size: 20,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('text-size prop', () => {
  const wrapper = mount(Loading, {
    props: {
      textSize: 20,
    },
    scopedSlots: {
      default: () => 'Text',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
