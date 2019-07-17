import Coupon from '../../coupon';
import CouponList from '..';
import CouponCell from '../../coupon-cell';
import { later, mount } from '../../../test/utils';

const coupon = {
  id: 1,
  discount: 0,
  denominations: 150,
  originCondition: 0,
  reason: '',
  value: 150,
  name: 'name',
  description: 'description',
  startAt: 1489104000,
  endAt: 1514592000
};

const coupon2 = {
  ...coupon,
  denominations: 100
};

const coupon3 = {
  ...coupon,
  denominations: 123
};

const emptyCoupon = {
  id: 0,
  discount: 0,
  denominations: 0,
  originCondition: 0,
  startAt: 1489104000,
  endAt: 1514592000
};

const discountCoupon = {
  ...coupon,
  id: 2,
  discount: 88,
  denominations: 0,
  originCondition: 50,
  value: 12,
  description: ''
};

const discountCoupon2 = {
  ...coupon,
  id: 2,
  discount: 90,
  denominations: 0,
  originCondition: 50,
  value: 12,
  description: ''
};

const disabledCoupon = {
  ...coupon,
  id: 3,
  reason: 'reason'
};

const disabledDiscountCoupon = {
  ...discountCoupon,
  discount: 10,
  id: 4,
  reason: ''
};

test('render disabled coupon', () => {
  const wrapper = mount(Coupon, {
    propsData: {
      coupon: disabledCoupon,
      disabled: true
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render coupon list', async () => {
  const wrapper = mount(CouponList, {
    propsData: {
      chosenCoupon: 1,
      coupons: [emptyCoupon, coupon, coupon2, coupon3, discountCoupon, discountCoupon2],
      disabledCoupons: [disabledCoupon, disabledDiscountCoupon]
    }
  });
  await later();
  expect(wrapper).toMatchSnapshot();
});

test('render empty coupon list', () => {
  const wrapper = mount(CouponList, {
    propsData: {
      coupons: [],
      disabledCoupons: []
    }
  });
  wrapper.findAll('.van-tab').at(1).trigger('click');
  expect(wrapper).toMatchSnapshot();
});

test('exchange coupon', () => {
  const wrapper = mount(CouponList);
  const exchange = wrapper.find('.van-coupon-list__exchange');

  wrapper.setData({
    currentCode: '1',
    displayedCouponIndex: 1
  });
  exchange.trigger('click');
  wrapper.setProps({ code: '2' });
  exchange.trigger('click');

  expect(wrapper.emitted('exchange')[0][0]).toBe('1');
  expect(wrapper.emitted('exchange')[1][0]).toBe('2');
  expect(wrapper.emitted('input')[0][0]).toBe('1');
  expect(wrapper.emitted('input')[1][0]).toBe('');
  expect(wrapper.emitted('input')[2][0]).toBe('2');
});

test('render coupon cell', () => {
  const onClick = jest.fn();
  const wrapper = mount(CouponCell, {
    context: {
      on: {
        click: onClick
      }
    }
  });

  expect(wrapper).toMatchSnapshot();
  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('render coupon cell with coupon', () => {
  const wrapper = mount(CouponCell, {
    propsData: {
      coupons: [{ value: 100 }],
      chosenCoupon: 0
    }
  });
  expect(wrapper).toMatchSnapshot();
});
