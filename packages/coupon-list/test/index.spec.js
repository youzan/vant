import CouponList from '../../coupon-list';
import CouponCell from '../../coupon-cell';
import { mount } from '../../../test/utils';

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

test('coupon cell', () => {
  const wrapper = mount(CouponCell);
  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({
    coupons: [{ value: 100 }],
    chosenCoupon: 0
  });
  expect(wrapper).toMatchSnapshot();
});
