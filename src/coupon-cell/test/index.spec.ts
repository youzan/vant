import { mount } from '../../../test';
import CouponCell from '../index';

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
  endAt: 1514592000,
};

test('should be the sames as the last snapshot when render coupon cell', () => {
  const wrapper = mount(CouponCell);
  expect(wrapper.html()).toMatchSnapshot();
});

test('should be the sames as the last snapshot when render coupon cell with coupon', () => {
  const wrapper = mount(CouponCell, {
    props: {
      coupons: [coupon],
      chosenCoupon: 0,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should be the sames as the last snapshot when render coupon cell with zero discount', () => {
  const wrapper = mount(CouponCell, {
    props: {
      coupons: [{ ...coupon, value: 0, denominations: 150 }],
      chosenCoupon: 0,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should click one times when coupon cell is clicked', () => {
  const onClick = jest.fn();
  const wrapper = mount(CouponCell, {
    props: {
      onClick,
    },
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});
