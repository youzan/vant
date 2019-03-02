import { mount } from '../../../test/utils';
import AddressList from '..';

const list = [
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000000',
    address: '浙江省杭州市拱墅区莫干山路 50 号'
  }
];

test('unswitchable', () => {
  const wrapper = mount(AddressList, {
    propsData: {
      list,
      switchable: false
    }
  });

  expect(wrapper).toMatchSnapshot();
});
