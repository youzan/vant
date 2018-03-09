import GoodsAction from '../components/goods-action';
import GoodsActionBigBtn from 'packages/goods-action-big-btn';
import GoodsActionMiniBtn from 'packages/goods-action-mini-btn';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

describe('GoodsAction', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a GoodsAction', () => {
    wrapper = mount(GoodsAction, {});

    DOMChecker(wrapper, {
      count: {
        '.van-goods-action__mini-btn': 2,
        '.van-goods-action__big-btn': 2,
        '.van-icon-chat': 1
      }
    });
  });

  it('click GoodsActionBigBtn', () => {
    wrapper = mount(GoodsActionBigBtn, {});

    const submitSpyFunc = sinon.spy();
    wrapper.vm.$on('click', submitSpyFunc);
    wrapper.trigger('click');
    expect(submitSpyFunc.calledOnce).to.be.true;
  });

  it('click GoodsActionMiniBtn', () => {
    wrapper = mount(GoodsActionMiniBtn, {
      propsData: {
        icon: 'card'
      }
    });

    const submitSpyFunc = sinon.spy();
    wrapper.vm.$on('click', submitSpyFunc);
    wrapper.trigger('click');
    expect(submitSpyFunc.calledOnce).to.be.true;
  });
});
