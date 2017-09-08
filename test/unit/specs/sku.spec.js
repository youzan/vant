import Sku from 'packages/sku';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';
import data from '../mock/sku';

const goods = data.goods_info;
goods.picture = goods.picture[0];

describe('Sku', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('default', () => {
    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        show: false,
        sku: data.sku,
        goods: goods,
        quota: data.quota,
        quotaUsed: data.quota_used
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
});
