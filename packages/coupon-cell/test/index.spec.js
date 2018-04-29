import demoTest from '../../../test/demo-test';
import CouponList from '../../coupon-list';
import { mount } from '@vue/test-utils';

demoTest('coupon');

test('exchange coupon', () => {
  const wrapper = mount(CouponList);
  const exchange = wrapper.find('.van-coupon-list__exchange');

  wrapper.vm.displayedCouponIndex = 1;
  wrapper.vm.currentCode = '1';
  exchange.trigger('click');
  wrapper.vm.code = '2';
  exchange.trigger('click');

  expect(wrapper.emitted('exchange')[0][0]).toBe('1');
  expect(wrapper.emitted('exchange')[1][0]).toBe('2');
  expect(wrapper.emitted('input')[0][0]).toBe('1');
  expect(wrapper.emitted('input')[1][0]).toBe('');
  expect(wrapper.emitted('input')[2][0]).toBe('2');
});
