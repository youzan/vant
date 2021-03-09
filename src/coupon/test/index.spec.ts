import { mount } from '../../../test';
import { Coupon } from '..';

const coupon = {
  id: 1,
  name: 'name',
  discount: 0,
  denominations: 150,
  originCondition: 0,
  reason: '',
  value: 150,
  valueDesc: '1.5',
  description: 'description',
  startAt: 1489104000,
  endAt: 1514592000,
};

test('should render "van-coupon--disabled" class when using disabled prop', () => {
  const wrapper = mount(Coupon, {
    props: {
      coupon,
      disabled: true,
    },
  });

  expect(wrapper.classes()).toContain('van-coupon--disabled');
});
