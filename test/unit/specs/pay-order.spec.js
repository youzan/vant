import PayOrder from 'packages/pay-order';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

describe('PayOrder', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('default', () => {
    const props = {
      price: 3050,
      buttonText: '提交订单',
      tip: '您的收货地址不支持同城送, 我们已为您推荐快递'
    };

    wrapper = mount(PayOrder, {
      propsData: props
    });

    DOMChecker(wrapper, {
      text: {
        '.van-button__text': props.buttonText,
        '.van-pay-order__price-interger': '¥30.',
        '.van-pay-order__price-decimal': '50',
        '.van-pay-order__tip': props.tip
      }
    });
  });

  it('no tip', () => {
    wrapper = mount(PayOrder, {
      propsData: {
        price: 3005,
        buttonText: '提交订单'
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-button__text': '提交订单',
        '.van-pay-order__price-interger': '¥30.',
        '.van-pay-order__price-decimal': '05',
        '.van-pay-order__tip': ''
      }
    });
  });

  it('handle submit', () => {
    wrapper = mount(PayOrder, {
      propsData: {
        price: 3005,
        buttonText: '提交订单'
      }
    });

    const submitSpyFunc = sinon.spy();
    wrapper.vm.$on('submit', submitSpyFunc);
    wrapper.find('.van-button')[0].trigger('click');
    setTimeout(() => {
      expect(submitSpyFunc.calledOnce).to.be.true;
    }, 300);
  });

  it('can not submit when disabled', () => {
    wrapper = mount(PayOrder, {
      propsData: {
        price: 3005,
        disabled: true,
        buttonText: '提交订单'
      }
    });

    const submitSpyFunc = sinon.spy();
    wrapper.vm.$on('submit', submitSpyFunc);
    wrapper.find('.van-button')[0].trigger('click');
    setTimeout(() => {
      expect(submitSpyFunc.calledOnce).to.be.false;
    }, 300);
  });

  it('can not submit when loading', () => {
    wrapper = mount(PayOrder, {
      propsData: {
        price: 3005,
        loading: true,
        buttonText: '提交订单'
      }
    });

    const submitSpyFunc = sinon.spy();
    wrapper.vm.$on('submit', submitSpyFunc);
    wrapper.find('.van-button')[0].trigger('click');
    setTimeout(() => {
      expect(submitSpyFunc.calledOnce).to.be.false;
    }, 300);
  });
});
