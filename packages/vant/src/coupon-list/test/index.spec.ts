import { later, mount } from '../../../test';
import { CouponList } from '..';
import { cdnURL } from '../../../docs/site';

const coupon = {
  id: 1,
  name: 'name',
  discount: 0,
  denominations: 150,
  originCondition: 0,
  reason: '',
  value: 150,
  description: 'description',
  startAt: 1489104000,
  endAt: 1514592000,
};

const coupon2 = {
  ...coupon,
  denominations: 100,
};

const coupon3 = {
  ...coupon,
  denominations: 123,
};

const disabledCoupon = {
  ...coupon,
  id: 3,
  reason: 'reason',
};

const discountCoupon = {
  ...coupon,
  id: 2,
  discount: 88,
  denominations: 0,
  originCondition: 50,
  value: 12,
  description: '',
};

const discountCoupon2 = {
  ...coupon,
  id: 2,
  discount: 90,
  denominations: 0,
  originCondition: 50,
  value: 12,
  description: '',
};

const disabledDiscountCoupon = {
  ...discountCoupon,
  id: 4,
  discount: 10,
  reason: '',
};

const emptyCoupon = {
  id: 0,
  name: '',
  discount: 0,
  value: 0,
  description: '',
  denominations: 0,
  originCondition: 0,
  startAt: 1489104000,
  endAt: 1514592000,
};

test('should be the sames as the last snapshot when render coupon list', async () => {
  const wrapper = mount(CouponList, {
    props: {
      chosenCoupon: 1,
      coupons: [
        emptyCoupon,
        coupon,
        coupon2,
        coupon3,
        discountCoupon,
        discountCoupon2,
      ],
      disabledCoupons: [disabledCoupon, disabledDiscountCoupon],
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should have two "van-coupon-list__empty" classes when render coupon list is empty', async () => {
  const wrapper = mount(CouponList, {
    props: {
      coupons: [],
      disabledCoupons: [],
    },
  });

  await later();
  const tabs = wrapper.findAll('.van-tab');
  await tabs.forEach((tab) => tab.trigger('click'));
  expect(wrapper.html()).toMatchSnapshot();
});

test('should use custom src when using empty-image prop', async () => {
  const wrapper = mount(CouponList, {
    props: {
      emptyImage: cdnURL('xxx.jpeg'),
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit "exchange" event when exchange button is clicked', async () => {
  const wrapper = mount(CouponList);
  const exchange = wrapper.find('.van-coupon-list__exchange');
  const field = wrapper.find('.van-field__control');

  await exchange.trigger('click');
  expect(wrapper.emitted('exchange')).toBeFalsy();

  await field.setValue('1');
  await exchange.trigger('click');
  expect(wrapper.emitted('exchange')![0]).toEqual(['1']);

  await wrapper.setProps({ code: '2' });
  await exchange.trigger('click');
  expect(wrapper.emitted('exchange')![1]).toEqual(['2']);
});

test('should emit "update:code" event when input a code', async () => {
  const wrapper = mount(CouponList);
  const exchange = wrapper.find('.van-coupon-list__exchange');

  const field = wrapper.find('.van-field__control');
  await field.setValue('1');
  await exchange.trigger('click');
  expect(wrapper.emitted('update:code')![0]).toEqual(['1']);
  expect(wrapper.emitted('update:code')![1]).toEqual(['']);

  await wrapper.setProps({ code: '2' });
  expect(wrapper.emitted('update:code')![2]).toEqual(['2']);
});

test('should render list-footer slot correctly', async () => {
  const wrapper = mount(CouponList, {
    slots: {
      'list-footer': () => 'List Footer',
      'disabled-list-footer': () => 'Disabled List Footer',
    },
  });

  await later();
  const tabs = wrapper.findAll('.van-tab');
  await tabs[1].trigger('click');

  expect(wrapper.html()).toMatchSnapshot();
});
