import { mount } from '../../../test';
import { AddressList } from '..';

const list = [
  {
    id: '1',
    name: 'Name 1',
    tel: '13000000000',
    address: 'Address 1',
  },
  {
    id: '2',
    name: 'Name 2',
    tel: '1310000000',
    address: 'Address 2',
  },
];

test('should not render Radio when switchable is false', async () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
      switchable: false,
    },
  });

  expect(wrapper.find('.van-radio').exists()).toBeFalsy();
});

test('should emit select event after clicking radio icon', () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
    },
  });

  wrapper.find('.van-radio__icon').trigger('click');

  expect(wrapper.emitted('select')![0]).toEqual([list[0], 0]);
});

test('should emit clickItem event when item is clicked', () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
    },
  });

  wrapper.find('.van-address-item').trigger('click');

  expect(wrapper.emitted('clickItem')![0]).toEqual([list[0], 0]);
});

test('should render tag slot correctly', () => {
  const wrapper = mount(AddressList, {
    slots: {
      tag: () => 'Custom Tag',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
