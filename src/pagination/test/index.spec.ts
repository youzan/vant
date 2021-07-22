import { mount } from '../../../test';
import { Pagination } from '..';

test('should render prev-text、next-text slot correctly', () => {
  const wrapper = mount(Pagination, {
    props: {
      totalItems: 50,
      showPageSize: 5,
    },
    slots: {
      'prev-text': () => 'Custom PrevText',
      'next-text': () => 'Custom NextText',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render page slot correctly', () => {
  const wrapper = mount(Pagination, {
    props: {
      totalItems: 50,
      showPageSize: 5,
    },
    slots: {
      page: ({ text }) => `foo ${text}`,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
