import { use } from '../utils';
import Checkbox from '../checkbox';

const [sfc, bem, t] = use('coupon');

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function getDate(timeStamp) {
  const date = new Date(timeStamp * 1000);
  return `${date.getFullYear()}.${padZero(date.getMonth() + 1)}.${padZero(date.getDate())}`;
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

export default sfc({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },

  computed: {
    validPeriod() {
      return `${t('valid')}：${getDate(this.coupon.startAt)} - ${getDate(this.coupon.endAt)}`;
    },

    faceAmount() {
      const { coupon } = this;
      if (coupon.valueDesc) {
        return `${coupon.valueDesc}<span>${coupon.unitDesc || ''}</span>`;
      }
      return coupon.denominations
        ? `<span>${this.currency}</span> ${formatAmount(this.coupon.denominations)}`
        : coupon.discount
          ? t('discount', formatDiscount(this.coupon.discount))
          : '';
    },

    conditionMessage() {
      let condition = this.coupon.originCondition;
      condition = condition % 100 === 0 ? Math.round(condition / 100) : (condition / 100).toFixed(2);
      return condition === 0 ? t('unlimited') : t('condition', condition);
    }
  },

  render(h) {
    const { coupon, disabled } = this;
    const description = (disabled && coupon.reason) || coupon.description;

    return (
      <div class={bem({ disabled })}>
        <div class={bem('content')}>
          <div class={bem('head')}>
            <h2 domPropsInnerHTML={this.faceAmount} />
            <p>{this.coupon.condition || this.conditionMessage}</p>
          </div>
          <div class={bem('body')}>
            <h2>{coupon.name}</h2>
            <p>{this.validPeriod}</p>
            {this.chosen && <Checkbox value={true} class={bem('corner')} />}
          </div>
        </div>
        {description && <p class={bem('description')}>{description}</p>}
      </div>
    );
  }
});
