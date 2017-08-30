import OrderGoods from 'packages/order-goods';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

const item1 = {
  img_url: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
  pay_price: 1050,
  title: '商品 A',
  num: '1'
};

const item2 = {
  points_price: 200,
  pay_price: 50,
  img_url: 'https://img.yzcdn.cn/upload_files/2017/07/02/e89d56cd92ad8ce3b9d8e1babc3758b6.jpg',
  title: '商品 B',
  num: '15',
  sku: [{ v: '商品SKU1' }, { v: '商品SKU2' }]
};

const item3 = {
  pay_price: 50,
  img_url: 'https://img.yzcdn.cn/upload_files/2017/07/02/e89d56cd92ad8ce3b9d8e1babc3758b6.jpg',
  title: '商品 C',
  num: '15',
  is_presale: true,
  delivery_time: '三天后发货',
  show_delivery_time: true,
  is_presale: true,
  is_present: true,
  message: {
    '留言1': '留言1内容',
    '留言2': 'https://img.yzcdn.cn/upload_files/2017/07/02/e89d56cd92ad8ce3b9d8e1babc3758b6.jpg'
  }
};

describe('OrderGoods', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('default', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        shopName: '起码运动馆',
        price: item1.pay_price,
        itemList: [item1],
        message: '留言留言'
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-order-goods-header a': '起码运动馆',
        '.van-order-goods-price .van-cell__value span': '¥10.50',
        '.van-card__title': item1.title,
        '.van-card__num': 'x ' + item1.num,
        '.van-card__price': '¥10.50'
      },
      value: {
        '.van-order-goods-message textarea': '留言留言'
      },
      src: {
        '.van-card__thumb img': item1.img_url
      }
    });
  });

  it('empty list', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: []
      }
    });

    wrapper.find('.van-button')[0].trigger('click');

    DOMChecker(wrapper, {
      text: {
        '.van-order-goods-empty p': '当前没有可购买的商品，请重新选择',
        '.van-order-goods-empty button': '返回重新选择'
      },
      src: {
        '.van-order-goods-empty img': 'http://b.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png'
      }
    });
  });

  it('empty list config', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        emptyIcon: 'https://img.yzcdn.cn/upload_files/2017/07/01/FlIeRrn5bMRoWhcwp4Dp1TmVAXKy.jpg',
        emptyMessage: '测试',
        emptyButtonText: '测试'
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-order-goods-empty p': '测试',
        '.van-order-goods-empty button': '测试'
      },
      src: {
        '.van-order-goods-empty img': 'https://img.yzcdn.cn/upload_files/2017/07/01/FlIeRrn5bMRoWhcwp4Dp1TmVAXKy.jpg'
      }
    });
  });

  it('edit message', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item1],
        message: ''
      }
    });

    wrapper.vm.$on('input', val => {
      wrapper.value = val;
    });

    const textarea = wrapper.find('textarea')[0];
    textarea.value = '测试留言';
    textarea.trigger('input');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.value).to.equal('测试留言');
    });
  });

  it('message not editable', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item1],
        message: '留言留言',
        messageEditable: false
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-order-goods-message p': '留言留言'
      }
    });
  });

  it('message not editable && empty', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item1],
        message: '',
        messageEditable: false
      }
    });

    wrapper.vm.$on('input', val => {
      wrapper.value = val;
    });

    wrapper.vm.$nextTick(() => {
      DOMChecker(wrapper, {
        text: {
          '.van-order-goods-message p': '无'
        }
      });
    });
  });

  it('points props', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item1],
        points: 100
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-order-goods-price .van-cell__value span': '100积分'
      }
    });
  });

  it('points prop and price prop', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item1],
        points: 100,
        price: 1050
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-order-goods-price .van-cell__value span': '100积分 + ¥10.50'
      }
    });
  });

  it('shopLink prop', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item1],
        shopLink: 'http://www.youzan.com'
      }
    });

    expect(wrapper.find('.van-order-goods-header a')[0].element.getAttribute('href')).to.equal('http://www.youzan.com');
  });

  it('item with points', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item2]
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-card__price': '200积分 + ¥0.50',
        '.van-card__title': item2.title,
        '.van-card__num': 'x ' + item2.num
      },
      src: {
        '.van-card__thumb img': item2.img_url
      }
    });
  });

  it('presable item with deliveryTime', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item3]
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-card__price': '¥0.50',
        '.van-card__title': item3.title,
        '.van-card__num': 'x ' + item3.num,
        '.van-order-goods-card__delivery .van-cell__value span': item3.delivery_time
      },
      count: {
        '.van-order-goods-card__present': 1,
        '.van-order-goods-card__tag-green': 1
      },
      src: {
        '.van-card__thumb img': item3.img_url
      }
    });
  });

  it('item with message', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item3]
      }
    });

    DOMChecker(wrapper, {
      count: {
        '.van-order-goods-card__message-button': 1,
        '.van-order-goods-card__message li': 2
      },
      style: {
        '.van-order-goods-card__message': {
          'display': 'none'
        }
      }
    });

    const messageButton = wrapper.find('.van-order-goods-card__message-button')[0];
    messageButton.trigger('click');

    setTimeout(function() {
      DOMChecker(wrapper, {
        noStyle: {
          '.van-order-goods-card__message': {
            'display': 'none'
          }
        }
      });
    }, 300);
  });

  it('multi items', () => {
    wrapper = mount(OrderGoods, {
      attachToDocument: true,
      propsData: {
        itemList: [item1, item2, item3]
      }
    });

    DOMChecker(wrapper, {
      count: {
        '.van-order-goods-card': 3
      }
    });
  });
});
