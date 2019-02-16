import { use } from '../utils';
import { inherit } from '../utils/functional';
import Cell from '../cell';

const [sfc, bem, t] = use('coupon-cell');

function formatValue(props) {
  const { coupons, chosenCoupon, currency } = props;
  const coupon = coupons[chosenCoupon];

  if (coupon) {
    const value = coupon.denominations || coupon.value;
    return `-${currency}${(value / 100).toFixed(2)}`;
  }

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

function CouponCell(h, props, slots, ctx) {
  const valueClass = props[props.chosenCoupon]
    ? 'van-coupon-cell--selected'
    : '';
  const value = formatValue(props);

  return (
    <Cell
      class={bem()}
      value={value}
      title={props.title || t('title')}
      border={props.border}
      isLink={props.editable}
      valueClass={valueClass}
      {...inherit(ctx, true)}
    />
  );
}

CouponCell.model = {
  prop: 'chosenCoupon'
};

CouponCell.props = {
  title: String,
  coupons: Array,
  currency: {
    type: String,
    default: '¥'
  },
  border: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  },
  chosenCoupon: {
    type: Number,
    default: -1
  }
};

export default sfc(CouponCell);
