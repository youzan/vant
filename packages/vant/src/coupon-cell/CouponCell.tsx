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
    type: [Number, Array],
    default: -1,
  },
};

export type CouponCellProps = ExtractPropTypes<typeof couponCellProps>;

function formatValue({ coupons, chosenCoupon, currency }: CouponCellProps) {
  const getValue = (coupon: CouponInfo) => {
    let value = 0;
    const { value: couponValue, denominations } = coupon;
    if (isDef(coupon.value)) {
      value = couponValue;
    } else if (isDef(coupon.denominations)) {
      value = denominations as number;
    }
    return value;
  };

  let value = 0,
    isExist = false;
  if (Array.isArray(chosenCoupon)) {
    (chosenCoupon as CouponInfo[]).forEach((i) => {
      const coupon = coupons[+i];
      if (coupon) {
        isExist = true;
        value += getValue(coupon);
      }
    });
  } else {
    const coupon = coupons[+chosenCoupon];
    if (coupon) {
      isExist = true;
      value = getValue(coupon);
    }
  }
  if (!isExist) {
    return coupons.length === 0 ? t('noCoupon') : t('count', coupons.length);
  }
  return `-${currency} ${(value / 100).toFixed(2)}`;
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
