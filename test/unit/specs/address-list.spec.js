import { mount } from 'avoriaz';
import AddressList from 'packages/address-list';

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
  },
  {
    id: '3',
    name: '王五',
    tel: '1320000000',
    address: '浙江省杭州市滨江区江南大道 15 号'
  }
];

describe('AddressList', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a AddressList', () => {
    wrapper = mount(AddressList);
    expect(wrapper.hasClass('van-address-list')).to.be.true;
  });

  it('create a AddressList with three items', () => {
    wrapper = mount(AddressList, {
      propsData: {
        value: '1',
        list
      }
    });
    expect(wrapper.find('.van-address-list__group .van-cell').length).to.equal(3);
    expect(wrapper.find('.van-icon-checked').length).to.equal(1);
  });

  it('listen to add & edit event', (done) => {
    wrapper = mount(AddressList, {
      propsData: {
        list
      }
    });

    const add = sinon.spy();
    wrapper.vm.$on('add', add);
    wrapper.find('.van-address-list__add')[0].trigger('click');
    expect(add.calledOnce).to.be.true;

    wrapper.vm.$on('edit', (item, index) => {
      expect(index).to.equal(0);
      done();
    });
    wrapper.find('.van-address-list__edit')[0].trigger('click');
  });

  it('listen to select event', (done) => {
    wrapper = mount(AddressList, {
      propsData: {
        value: '1',
        list
      }
    });

    wrapper.vm.$on('select', (item, index) => {
      expect(item.id).to.equal('3');
      done();
    });
    wrapper.find('.van-radio')[2].trigger('click');
  });
});
