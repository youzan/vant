import { mount } from '../../../test';
import Paginaion from '..';

test('render prev-text & next-text slot', () => {
  const wrapper = mount(Paginaion, {
    propsData: {
      totalItems: 50,
      showPageSize: 5,
    },
    scopedSlots: {
      'prev-text': () => 'Custom PrevText',
      'next-text': () => 'Custom NextText',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('render page slot', () => {
  const wrapper = mount(Paginaion, {
    propsData: {
      totalItems: 50,
      showPageSize: 5,
    },
    scopedSlots: {
      page: ({ text }) => `${text}`,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
