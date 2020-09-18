import { isDef, createNamespace } from '../utils';
import Cell from '../cell';

const [createComponent, bem, t] = createNamespace('coupon-cell');

function formatValue(props) {
  const { coupons, chosenCoupon, currency } = props;
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

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

export default createComponent({
  props: {
    title: String,
    coupons: {
      type: Array,
      default: () => [],
    },
    currency: {
      type: String,
      default: '¥',
    },
    border: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    chosenCoupon: {
      type: [Number, String],
      default: -1,
    },
  },

  setup(props) {
    return () => {
      const selected = props.coupons[+props.chosenCoupon];
      const value = formatValue(props);

      return (
        <Cell
          class={bem()}
          value={value}
          title={props.title || t('title')}
          border={props.border}
          isLink={props.editable}
          valueClass={bem('value', { selected })}
        />
      );
    };
  },
});
