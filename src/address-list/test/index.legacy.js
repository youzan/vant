import { mount } from '@vue/test-utils';
import AddressList from '..';

const list = [
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000000',
    address: '浙江省杭州市拱墅区莫干山路 50 号',
  },
];

test('unswitchable', () => {
  const wrapper = mount(AddressList, {
    props: {
      list,
      switchable: false,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('select event', () => {
  const onSelect = jest.fn();
  const wrapper = mount(AddressList, {
    props: {
      list,
    },
    context: {
      on: {
        select: onSelect,
      },
    },
  });

  wrapper.find('.van-radio__icon').trigger('click');

  expect(onSelect).toHaveBeenCalledTimes(1);
});

test('click-item event', () => {
  const onClickItem = jest.fn();
  const wrapper = mount(AddressList, {
    props: {
      list,
    },
    context: {
      on: {
        'click-item': onClickItem,
      },
    },
  });

  wrapper.find('.van-address-item').trigger('click');

  expect(onClickItem).toHaveBeenCalledTimes(1);
});
