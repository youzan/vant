import Sku from 'packages/sku';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';
import data from '../mock/sku';

const { skuHelper } = Sku;
const goods = data.goods_info;
goods.picture = goods.picture[0];

describe('Sku', (done) => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('default', (done) => {
    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        value: true,
        sku: data.sku,
        goods: goods,
        resetStepperOnHide: true
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-sku__goods-name': goods.title,
        '.van-sku__price-num': '1.00'
      },
      value: {
        '.van-stepper__input': '1'
      },
      src: {
        '.van-sku__goods-img': 'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'
      }
    });

    // 测试默认选中
    const selectedSku = skuHelper.getSelectedSkuValues(data.sku.tree, wrapper.vm.selectedSku);
    expect(selectedSku[0].id).to.equal('30349');

    // 关闭sku弹层
    const closeCallback = sinon.spy();
    const closeIcon = wrapper.find('.van-sku__close-icon')[0];
    wrapper.vm.$on('sku-close', closeCallback);
    closeIcon.trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(closeCallback.calledOnce).to.be.true;
      done();
    });
  });

  it('click buy and addCart', (done) => {
    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        value: true,
        sku: data.sku,
        goods: goods
      }
    });

    const buyCallback = sinon.spy();
    const addCartCallback = sinon.spy();
    const buyBtn = wrapper.find('.van-sku__buy-btn')[0];
    const addCartBtn = wrapper.find('.van-sku__add-cart-btn')[0];
    wrapper.vm.$on('buy-clicked', buyCallback);
    wrapper.vm.$on('add-cart', addCartCallback);

    // 未选择完整规格时，弹出toast提示
    buyBtn.trigger('click');
    wrapper.vm.$nextTick(() => {
      const toastText = document.querySelector('.van-toast__text');
      expect(toastText.textContent).to.equal('请选择完整的规格');
      expect(buyCallback.calledOnce).to.be.false;

      // 选择完整规格时，未填留言时，弹出toast提示。
      wrapper.find('.van-sku-row-group')[1].find('.van-sku-row__item')[0].trigger('click');
      buyBtn.trigger('click');
      wrapper.vm.$nextTick(() => {
        expect(toastText.textContent).to.equal('请填写留言1');
        expect(buyCallback.calledOnce).to.be.false;

        // 触发buy-clicked事件
        const requiredMessage = wrapper.find('.van-cell--required .van-field__control')[0];
        requiredMessage.element.value = 'test';
        requiredMessage.trigger('input');
        wrapper.vm.$nextTick(() => {
          buyBtn.trigger('click');
          addCartBtn.trigger('click');
          expect(buyCallback.calledOnce).to.be.true;
          expect(addCartCallback.calledOnce).to.be.true;
          done();
        });
      });
    });
  });

  it('change step value', (done) =>{
    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        value: true,
        sku: data.sku,
        goods: goods,
        quota: data.quota,
        quotaUsed: data.quota_used
      }
    });

    // 点击减号
    const minusBtn = wrapper.find('.van-stepper__minus')[0];
    minusBtn.trigger('click');
    wrapper.vm.$nextTick(() => {
      const toastText = document.querySelector('.van-toast__text');
      expect(toastText.textContent).to.equal('至少选择一件');

      // 手动修改购买数量
      const stepperInput = wrapper.find('.van-stepper__input')[0];
      stepperInput.element.value = 20;
      stepperInput.trigger('input');
      wrapper.vm.$nextTick(() => {
        expect(+stepperInput.element.value).to.equal(data.quota - data.quota_used);

        // 达到购买上限时，点击加号
        const plusBtn = wrapper.find('.van-stepper__plus')[0];
        plusBtn.trigger('click');
        wrapper.vm.$nextTick(() => {
          expect(toastText.textContent).to.equal(`限购${data.quota}件，您已购买${data.quota_used}件`);
          done();
        });
      });
    });
  });

  it('test none sku', (done) => {
    data.sku.none_sku = true; // eslint-disable-line

    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        value: false,
        sku: data.sku,
        goods: goods
      }
    });

    wrapper.vm.value = true;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.van-sku-group-container').length).to.equal(0);
      done();
    });
  });
});
