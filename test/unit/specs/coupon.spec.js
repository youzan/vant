import CouponCell from 'packages/coupon-cell';
import CouponList from 'packages/coupon-list';
import { mount } from 'avoriaz';
import { DOMChecker } from '../utils';

const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  origin_condition: 0,
  reason: '',
  value: 150,
  condition: '下单立减 1.50 元',
  name: '新手专用优惠券',
  start_at: 1489104000,
  end_at: 1514592000
};

const discountCoupon = {
  ...coupon,
  discount: 88,
  denominations: 0,
  origin_condition: 50,
  value: 12,
  condition: '下单即享 8.8 折'
};

const emptyCoupon = {
  denominations: 0,
  discount: 0
};

const disabledCoupon = {
  ...coupon,
  avaliable: 0,
  reason: '未满足使用门槛'
};

const disabledDiscountCoupon = {
  ...discountCoupon,
  avaliable: 0,
  reason: '未满足使用门槛'
};

describe('CouponCell', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('no coupon', () => {
    wrapper = mount(CouponCell, {});

    DOMChecker(wrapper, {
      text: {
        '.van-cell__value--link': '使用优惠'
      }
    });
  });

  it('has two coupon', () => {
    wrapper = mount(CouponCell, {
      propsData: {
        coupons: [coupon, discountCoupon]
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-cell__value--link': '您有 2 个可用优惠'
      }
    });
  });

  it('select first coupon', () => {
    wrapper = mount(CouponCell, {
      propsData: {
        chosenCoupon: 0,
        coupons: [coupon, discountCoupon]
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-cell__value--link h2': '新手专用优惠券 省￥1.50',
        '.van-cell__value--link span': '下单立减 1.50 元'
      },
      count: {
        '.van-cell__right-icon': 1
      }
    });
  });

  it('not editable', () => {
    wrapper = mount(CouponCell, {
      propsData: {
        chosenCoupon: 0,
        coupons: [coupon, discountCoupon],
        editable: false
      }
    });

    DOMChecker(wrapper, {
      text: {
        '.van-cell__value h2': '新手专用优惠券 省￥1.50',
        '.van-cell__value span': '下单立减 1.50 元'
      },
      count: {
        '.van-cell__right-icon': 0
      }
    });
  });
});

describe('CouponList', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('no coupon', () => {
    wrapper = mount(CouponList, {
      propsData: {
        chosenCoupon: -1
      }
    });

    DOMChecker(wrapper, {
      count: {
        '.van-coupon-item': 0,
        '.van-coupon-item--disabled': 0,
        '.van-coupon-list__list h3': 0
      }
    });
  });

  it('has two coupon', () => {
    wrapper = mount(CouponList, {
      propsData: {
        chosenCoupon: -1,
        coupons: [coupon, discountCoupon],
        disabledCoupons: [disabledCoupon, disabledDiscountCoupon]
      }
    });
    DOMChecker(wrapper, {
      count: {
        '.van-coupon-item': 4,
        '.van-coupon-item--disabled': 2,
        '.van-coupon-list__list h3': 1
      }
    });
  });

  it('switch to first coupon', (done) => {
    wrapper = mount(CouponList, {
      attachToDocument: true,
      propsData: {
        chosenCoupon: -1,
        coupons: [coupon, discountCoupon],
        disabledCoupons: [disabledCoupon, disabledDiscountCoupon]
      }
    });

    wrapper.vm.$on('change', (index) => {
      wrapper.vm.chosenCoupon = index;
    });

    setTimeout(() => {
      wrapper.find('.van-coupon-item')[0].trigger('click');

      setTimeout(() => {
        expect(wrapper.vm.chosenCoupon).to.equal(0);
        done();
      }, 300);
    }, 300);
  });

  it('cancel select coupon', (done) => {
    wrapper = mount(CouponList, {
      attachToDocument: true,
      propsData: {
        chosenCoupon: 0,
        displayedCouponIndex: 0,
        coupons: [coupon, discountCoupon],
        disabledCoupons: [disabledCoupon, disabledDiscountCoupon]
      }
    });

    wrapper.vm.$on('change', (index) => {
      wrapper.vm.chosenCoupon = index;
      wrapper.vm.displayedCouponIndex = index;
    });

    setTimeout(() => {
      wrapper.find('.van-coupon-list__close')[0].trigger('click');
      setTimeout(() => {
        expect(wrapper.vm.chosenCoupon).to.equal(-1);
        done();
      }, 500);
    }, 500);
  });

  it('denominations format', () => {
    wrapper = mount(CouponList, {
      attachToDocument: true,
      propsData: {
        coupons: [coupon, {
          ...coupon,
          denominations: 10
        }, {
          ...coupon,
          denominations: 100
        }, {
          ...coupon,
          denominations: 135
        }, {
          ...coupon,
          denominations: 0
        }]
      }
    });

    expect(wrapper.find('.van-coupon-item__gradient h2')[0].text()).to.equal('¥ 1.5');
    expect(wrapper.find('.van-coupon-item__gradient h2')[1].text()).to.equal('¥ 0.1');
    expect(wrapper.find('.van-coupon-item__gradient h2')[2].text()).to.equal('¥ 1');
    expect(wrapper.find('.van-coupon-item__gradient h2')[3].text()).to.equal('¥ 1.35');
    expect(wrapper.find('.van-coupon-item__gradient h2')[4].text()).to.equal('');
  });

  it('discount format', () => {
    wrapper = mount(CouponList, {
      attachToDocument: true,
      propsData: {
        coupons: [discountCoupon, {
          ...discountCoupon,
          discount: 10
        }, {
          ...discountCoupon,
          discount: 0
        }]
      }
    });

    expect(wrapper.find('.van-coupon-item__gradient h2')[0].text()).to.equal('8.8折');
    expect(wrapper.find('.van-coupon-item__gradient h2')[1].text()).to.equal('1折');
    expect(wrapper.find('.van-coupon-item__gradient h2')[2].text()).to.equal('');
  });

  it('add coupon', (done) => {
    wrapper = mount(CouponList, {
      attachToDocument: true,
      propsData: {
        chosenCoupon: 0,
        coupons: [coupon, discountCoupon, emptyCoupon],
        disabledCoupons: [disabledCoupon, disabledDiscountCoupon]
      }
    });

    const code = '123123';

    wrapper.vm.$on('exchange', (code) => {
      expect(code).to.equal(code);
      wrapper.vm.coupons.push(coupon);
    });

    setTimeout(() => {
      DOMChecker(wrapper, {
        count: {
          '.van-button--disabled': 1
        }
      });

      wrapper.find('.van-field__control')[0].element.value = code;
      wrapper.find('.van-field__control')[0].trigger('input');

      setTimeout(() => {
        wrapper.find('.van-coupon-list__exchange')[0].trigger('click');
        DOMChecker(wrapper, {
          count: {
            '.van-button--disabled': 0
          }
        });

        setTimeout(() => {
          expect(wrapper.find('.van-coupon-list')[0].hasStyle('display', 'none')).to.equal(false);
          DOMChecker(wrapper, {
            count: {
              '.van-button--disabled': 1,
              '.van-coupon-item': 6,
              '.van-coupon-item--disabled': 2
            }
          });
          done();
        }, 300);
      }, 300);
    }, 300);
  });

  it('displayedCouponIndex out of range', (done) => {
    wrapper = mount(CouponList, {
      propsData: {
        displayedCouponIndex: -100,
        coupons: [coupon, discountCoupon, emptyCoupon]
      }
    });

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.chosenCoupon).to.equal(-1);
      done();
    });
  });
});
