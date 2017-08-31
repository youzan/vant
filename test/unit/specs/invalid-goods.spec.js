import InvalidGoods from 'packages/invalid-goods/index';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

const mockItem = {
  sku: [{ v: '商品SKU1' }, { v: '商品SKU2' }],
  num: 2,
  'sku_id': 123,
  title: '商品名称',
  price: 12200,
  'unavailable_desc': '超出配送区域',
  'img_url': 'https://img.yzcdn.cn/upload_files/2017/06/29/FnPSAKkEeh4FnDA09oIbmnlzWQrw.png'
};

describe('InvalidGoods', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('default', () => {
    wrapper = mount(InvalidGoods, {
      attachToDocument: true,
      propsData: {
        goods: [mockItem, mockItem, mockItem]
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-invalid-goods__title': '以下商品无法一起购买，点击查看原因',
        '.van-actionsheet__header h3': '以下商品无法一起下单',
        '.van-invalid-goods-card__price': '¥122.00',
        '.van-invalid-goods-card__sku': '商品SKU1, 商品SKU2',
        '.van-invalid-goods-card__title': mockItem.title,
        '.van-invalid-goods-card__num': 'x' + mockItem.num,
        '.van-invalid-goods-card__desc': mockItem.unavailable_desc,
        '.van-invalid-goods__count span': '共3件'
      },
      count: {
        '.van-invalid-goods-card': 3,
        '.van-invalid-goods__gallery img': 3
      },
      src: {
        '.van-invalid-goods__thumb img': mockItem.img_url
      }
    });
  });

  it('title prop', () => {
    wrapper = mount(InvalidGoods, {
      attachToDocument: true,
      propsData: {
        goods: [mockItem],
        title: '标题'
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-invalid-goods__title': '标题'
      }
    });
  });

  it('actionsheetTitle prop', () => {
    wrapper = mount(InvalidGoods, {
      attachToDocument: true,
      propsData: {
        goods: [mockItem],
        actionsheetTitle: 'actionsheet标题'
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-actionsheet__header h3': 'actionsheet标题'
      }
    });
  });
});
