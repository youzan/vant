import { mount } from '@vue/test-utils';
import Paginaion from '..';

test('render prev-text & next-text slot', () => {
  const wrapper = mount(Paginaion, {
    props: {
      totalItems: 50,
      showPageSize: 5,
    },
    scopedSlots: {
      'prev-text': () => 'Custom PrevText',
      'next-text': () => 'Custom NextText',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render page slot', () => {
  const wrapper = mount(Paginaion, {
    props: {
      totalItems: 50,
      showPageSize: 5,
    },
    scopedSlots: {
      page: ({ text }) => `${text}`,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
