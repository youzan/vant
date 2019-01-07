import { use } from '../utils';
import Cell from '../cell';

const [sfc, bem, t] = use('coupon-cell');

export default sfc({
  model: {
    prop: 'chosenCoupon'
  },

  props: {
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
  },

  computed: {
    value() {
      const { coupons } = this;
      const coupon = coupons[this.chosenCoupon];
      if (coupon) {
        const value = coupon.denominations || coupon.value;
        return `-${this.currency}${(value / 100).toFixed(2)}`;
      }
      return coupons.length === 0 ? t('tips') : t('count', coupons.length);
    },

    valueClass() {
      return this.coupons[this.chosenCoupon] ? 'van-coupon-cell--selected' : '';
    }
  },

  render(h) {
    return (
      <Cell
        class={bem()}
        title={this.title || t('title')}
        value={this.value}
        border={this.border}
        is-link={this.editable}
        value-class={this.valueClass}
        onClick={() => {
          this.$emit('click');
        }}
      />
    );
  }
});
