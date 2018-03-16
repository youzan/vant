import Sku from 'packages/sku';
import Uploader from 'packages/uploader';
import Toast from 'packages/toast';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';
import skuMockData from '../../docs/demos/mock/sku';

const data = skuMockData['zh-CN'];
const { skuHelper } = Sku;
const goods = data.goods_info;
const initialSku = {
  s1: '30349',
  s2: '1193'
};
const repeat = (str, count) => {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
};

const File = function() {
  this.name = 'test';
  this.size = 10000;
};

const mockFile = new File([], '/Users');

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
        goodsId: data.goods_id,
        goods: goods,
        resetStepperOnHide: true,
        resetSelectedSkuOnHide: true
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

    // 测试sku图片
    const firstSku = wrapper.find('.van-sku-row__item')[0];
    firstSku.trigger('click');
    wrapper.vm.$nextTick(() => {
      DOMChecker(wrapper, {
        src: {
          '.van-sku__goods-img': 'https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg'
        }
      });

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
  });

  it('should trigger an event or toast error when click buy and addCart', (done) => {
    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        value: true,
        sku: data.sku,
        goodsId: data.goods_id,
        goods: goods
      }
    });

    const buyCallback = sinon.spy();
    const addCartCallback = sinon.spy();
    const buyBtn = wrapper.find('.van-button--bottom-action')[1];
    const addCartBtn = wrapper.find('.van-button--bottom-action')[0];
    wrapper.vm.$on('buy-clicked', buyCallback);
    wrapper.vm.$on('add-cart', addCartCallback);

    // 未选择完整规格时，弹出toast提示
    buyBtn.trigger('click');
    wrapper.vm.$nextTick(() => {
      const toastText = document.querySelector('.van-toast div');
      expect(toastText.textContent).to.equal('请选择完整的规格');
      expect(buyCallback.calledOnce).to.be.false;

      // 选择完整规格时，未填留言时，弹出toast提示。
      wrapper.find('.van-sku-row')[1].find('.van-sku-row__item')[0].trigger('click');
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

  it('should modify current num or toast error when change step value', (done) => {
    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        value: true,
        sku: data.sku,
        goodsId: data.goods_id,
        goods: goods,
        quota: data.quota,
        quotaUsed: data.quota_used
      }
    });

    // 点击减号
    const minusBtn = wrapper.find('.van-stepper__minus')[0];
    minusBtn.trigger('click');
    wrapper.vm.$nextTick(() => {
      const toastText = document.querySelector('.van-toast div');
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
          expect(toastText.textContent).to.equal(`限购${data.quota}件`);
          done();
        });
      });
    });
  });

  it('should toast custom error when change step value', (done) => {
    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        value: true,
        sku: data.sku,
        goodsId: data.goods_id,
        goods: goods,
        quota: data.quota,
        quotaUsed: data.quota_used,
        customStepperConfig: {
          quotaText: '单次限购100件',
          handleOverLimit: (data) => {
            const { action, limitType, quota } = data;

            if (action === 'minus') {
              Toast('至少选择一件商品');
            } else if (action === 'plus') {
              if (limitType === 0) {
                Toast(`限购${quota}件`);
              } else {
                Toast('库存不够了~~');
              }
            }
          }
        }
      }
    });

    // 点击减号
    const minusBtn = wrapper.find('.van-stepper__minus')[0];
    minusBtn.trigger('click');
    wrapper.vm.$nextTick(() => {
      const toastText = document.querySelector('.van-toast div');
      expect(toastText.textContent).to.equal('至少选择一件商品');

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
          expect(toastText.textContent).to.equal(`限购${data.quota}件`);
          done();
        });
      });
    });
  });

  it('should not render sku group when none_sku is true', (done) => {
    const newSku = {
      ...data.sku,
      none_sku: true
    };

    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        value: false,
        sku: newSku,
        goodsId: data.goods_id,
        goods: goods
      }
    });

    wrapper.vm.value = true;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.van-sku-group-container').length).to.equal(0);
      done();
    });
  });

  it('should toast error when sku messages fail to pass validation', (done) => {
    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        initialSku,
        value: true,
        sku: data.sku,
        goodsId: data.goods_id,
        goods: goods,
        messageConfig: {
          uploadImg: () => {
            return new Promise((resolve) => {
              setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
            });
          },
          uploadMaxSize: 3
        }
      }
    });

    const buyBtn = wrapper.find('.van-button--bottom-action')[0];
    const skuMessages = wrapper.find('.van-sku-messages')[0];
    const inputs = skuMessages.find('input');
    const textarea = skuMessages.find('textarea')[0];
    const uploader = wrapper.find(Uploader)[0];
    // 修改留言内容
    inputs[0].element.value = 123;
    // 测试身份证号
    inputs[1].element.value = 234;
    inputs[0].trigger('input');
    inputs[1].trigger('input');
    // 测试图片
    uploader.vm.onChange({ target: { files: [mockFile] }});

    wrapper.vm.$nextTick(() => {
      // 点击购买
      buyBtn.trigger('click');

      wrapper.vm.$nextTick(() => {
        const toastText = document.querySelector('.van-toast div');
        expect(toastText.textContent).to.equal('请填写正确的身份证号码');

        inputs[1].element.value = 330101198801012211;
        // 测试textarea字数限制
        textarea.element.value = repeat('*', 201);
        inputs[1].trigger('input');
        textarea.trigger('input');

        wrapper.vm.$nextTick(() => {
          buyBtn.trigger('click');

          wrapper.vm.$nextTick(() => {
            expect(toastText.textContent).to.equal('留言4 写的太多了，不要超过200字');

            textarea.element.value = '';
            // 测试数字留言
            inputs[3].element.value = 'abc';
            textarea.trigger('input');
            inputs[3].trigger('input');

            wrapper.vm.$nextTick(() => {
              buyBtn.trigger('click');

              wrapper.vm.$nextTick(() => {
                expect(toastText.textContent).to.equal('请填写正确的数字格式留言');

                inputs[3].element.value = 0;
                inputs[4].element.value = 345;
                inputs[3].trigger('input');
                inputs[4].trigger('input');

                wrapper.vm.$nextTick(() => {
                  buyBtn.trigger('click');

                  wrapper.vm.$nextTick(() => {
                    expect(toastText.textContent).to.equal('请填写正确的邮箱');
                    done();
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  it('should toast error when there is no stock', (done) => {
    /* eslint-disable */
    const newData = Object.assign({}, data);
    newData.sku.stock_num = 0;
    newData.sku.messages = [];
    newData.sku.list.forEach((item) => {
      item.stock_num = 0;
    });
    /* eslint-enable */

    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        initialSku,
        value: true,
        sku: newData.sku,
        goodsId: newData.goods_id,
        goods: goods
      }
    });

    const buyBtn = wrapper.find('.van-button--bottom-action')[0];

    wrapper.vm.$nextTick(() => {
      buyBtn.trigger('click');
      wrapper.vm.$nextTick(() => {
        const toastText = document.querySelector('.van-toast div');
        expect(toastText.textContent).to.equal('商品已经无法购买啦');

        const plusBtn = wrapper.find('.van-stepper__plus')[0];
        plusBtn.trigger('click');
        wrapper.vm.$nextTick(() => {
          expect(toastText.textContent).to.equal('库存不足');
          done();
        });
      });
    });
  });

  it('should reset values when sku change', (done) => {
    wrapper = mount(Sku, {
      attachToDocument: true,
      propsData: {
        value: true,
        sku: data.sku,
        goodsId: data.goods_id,
        goods: goods,
        resetStepperOnHide: true,
        resetSelectedSkuOnHide: true
      }
    });

    const newSku = {
      ...data.sku,
      tree: [],
      list: [],
      messages: [],
      none_sku: true
    };

    wrapper.vm.sku = newSku;
    const skuMessages = wrapper.find(Sku.SkuMessages)[0];

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.selectedSku).to.be.empty;
      expect(skuMessages.vm.messageValues).to.be.empty;
      done();
    });
  });
});
