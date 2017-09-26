import SubmitBar from 'packages/submit-bar';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

describe('SubmitBar', () => {
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

    wrapper = mount(SubmitBar, {
      propsData: props
    });

    DOMChecker(wrapper, {
      text: {
        '.van-button__text': props.buttonText,
        '.van-submit-bar__price-interger': '¥30.',
        '.van-submit-bar__price-decimal': '50',
        '.van-submit-bar__tip': props.tip
      }
    });
  });

  it('no tip', () => {
    wrapper = mount(SubmitBar, {
      propsData: {
        price: 3005,
        buttonText: '提交订单',
        buttonType: 'default'
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-button__text': '提交订单',
        '.van-submit-bar__price-interger': '¥30.',
        '.van-submit-bar__price-decimal': '05',
        '.van-submit-bar__tip': ''
      }
    });
  });

  it('handle submit', () => {
    wrapper = mount(SubmitBar, {
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
    wrapper = mount(SubmitBar, {
      propsData: {
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
    wrapper = mount(SubmitBar, {
      propsData: {
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
