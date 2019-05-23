import { use, padZero } from '../utils';
import { RED } from '../utils/color';
import Checkbox from '../checkbox';

const [sfc, bem, t] = use('coupon');

function getDate(timeStamp) {
  const date = new Date(timeStamp * 1000);
  return `${date.getFullYear()}.${padZero(date.getMonth() + 1)}.${padZero(
    date.getDate()
  )}`;
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
      const { startAt, endAt } = this.coupon;
      return `${t('valid')}：${getDate(startAt)} - ${getDate(endAt)}`;
    },

    faceAmount() {
      const { coupon } = this;

      if (coupon.valueDesc) {
        return `${coupon.valueDesc}<span>${coupon.unitDesc || ''}</span>`;
      }

      if (coupon.denominations) {
        return `<span>${this.currency}</span> ${formatAmount(this.coupon.denominations)}`;
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(this.coupon.discount));
      }

      return '';
    },

    conditionMessage() {
      const condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    }
  },

  render(h) {
    const { coupon, disabled } = this;
    const description = (disabled && coupon.reason) || coupon.description;

    return (
      <div class={bem({ disabled })}>
        <div class={bem('content')}>
          <div class={bem('head')}>
            <h2 class={bem('amount')} domPropsInnerHTML={this.faceAmount} />
            <p>{this.coupon.condition || this.conditionMessage}</p>
          </div>
          <div class={bem('body')}>
            <h2 class={bem('name')}>{coupon.name}</h2>
            <p>{this.validPeriod}</p>
            {this.chosen && (
              <Checkbox value={true} class={bem('corner')} checked-color={RED} />
            )}
          </div>
        </div>
        {description && <p class={bem('description')}>{description}</p>}
      </div>
    );
  }
});
