import { defineComponent, type ExtractPropTypes } from 'vue';

// Utils
import {
  isDef,
  truthProp,
  makeArrayProp,
  makeStringProp,
  createNamespace,
} from '../utils';

// Components
import { Cell } from '../cell';

// Types
import type { CouponInfo } from '../coupon';

const [name, bem, t] = createNamespace('coupon-cell');

export const couponCellProps = {
  title: String,
  border: truthProp,
  editable: truthProp,
  coupons: makeArrayProp<CouponInfo>(),
  currency: makeStringProp('¥'),
  chosenCoupon: {
    type: [Number, Array<any>],
    default: -1,
  },
};

export type CouponCellProps = ExtractPropTypes<typeof couponCellProps>;

function formatValue({ coupons, chosenCoupon, currency }: CouponCellProps) {
  if (Array.isArray(chosenCoupon)) {
    if (chosenCoupon.length === 0) {
      return coupons.length === 0 ? t('noCoupon') : t('count', coupons.length);
    }
    let value = 0;
    chosenCoupon.forEach((i) => {
      const coupon = coupons[+i];
      if (isDef(coupon.value)) {
        value += coupon.value;
      } else if (isDef(coupon.denominations)) {
        value += coupon.denominations;
      }
    });

    return `-${currency} ${(value / 100).toFixed(2)}`;
  }

  const coupon = coupons[+chosenCoupon];

  if (coupon) {
    let value = 0;

    if (isDef(coupon.value)) {
      ({ value } = coupon);
    } else if (isDef(coupon.denominations)) {
      value = coupon.denominations;
    }

    return `-${currency} ${(value / 100).toFixed(2)}`;
  }

  return coupons.length === 0 ? t('noCoupon') : t('count', coupons.length);
}

export default defineComponent({
  name,

  props: couponCellProps,

  setup(props) {
    return () => {
      const selected = Array.isArray(props.chosenCoupon)
        ? props.chosenCoupon.length
        : props.coupons[+props.chosenCoupon];
      return (
        <Cell
          class={bem()}
          value={formatValue(props)}
          title={props.title || t('title')}
          border={props.border}
          isLink={props.editable}
          valueClass={bem('value', { selected })}
        />
      );
    };
  },
});
