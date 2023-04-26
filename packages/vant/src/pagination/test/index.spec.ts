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

test('should emit change event after the page is changed', async () => {
  const wrapper = mount(Pagination, {
    props: {
      modelValue: 1,
      totalItems: 50,
      'onUpdate:modelValue': (modelValue: number) => {
        wrapper.setProps({ modelValue });
      },
    },
  });

  await wrapper
    .findAll('.van-pagination__item--page button')[2]
    .trigger('click');
  expect(wrapper.emitted('change')).toEqual([[3]]);

  await wrapper.find('.van-pagination__item--prev button').trigger('click');
  expect(wrapper.emitted('change')).toEqual([[3], [2]]);

  await wrapper.find('.van-pagination__item--next button').trigger('click');
  expect(wrapper.emitted('change')).toEqual([[3], [2], [3]]);
});

test('should allow to hide prev button and next button', () => {
  const wrapper = mount(Pagination, {
    props: {
      totalItems: 50,
      showPageSize: 5,
      showPrevButton: false,
      showNextButton: false,
    },
  });

  expect(wrapper.find('.van-pagination__item--prev').exists()).toBeFalsy();
  expect(wrapper.find('.van-pagination__item--next').exists()).toBeFalsy();
});
