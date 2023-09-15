import { createNamespace } from '../utils';
import { RED } from '../utils/constant';
import { padZero } from '../utils/format/string';
import Checkbox from '../checkbox';

const [createComponent, bem, t] = createNamespace('coupon');

function formatTimeStamp(timeStamp) {
  // compatible when the timestamp is seconds
  if (timeStamp < 10 ** 12) {
    return timeStamp * 1000;
  }
  return +timeStamp;
}

function getDate(timeStamp) {
  const date = new Date(formatTimeStamp(timeStamp));
  return `${date.getFullYear()}.${padZero(date.getMonth() + 1)}.${padZero(
    date.getDate()
  )}`;
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(
    amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2
  );
}

export default createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥',
    },
  },

  computed: {
    validPeriod() {
      const { startAt, endAt, customValidPeriod } = this.coupon;
      return customValidPeriod || `${getDate(startAt)} - ${getDate(endAt)}`;
    },

    faceAmount() {
      const { coupon } = this;

      if (coupon.valueDesc) {
        return `${coupon.valueDesc}<span>${coupon.unitDesc || ''}</span>`;
      }

      if (coupon.denominations) {
        const denominations = formatAmount(coupon.denominations);
        return `<span>${this.currency}</span> ${denominations}`;
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(coupon.discount));
      }

      return '';
    },

    conditionMessage() {
      const condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    },
  },

  render() {
    const { coupon, disabled } = this;
    const description = (disabled && coupon.reason) || coupon.description;

    return (
      <div class={bem({ disabled })}>
        <div class={bem('content')}>
          <div class={bem('head')}>
            <h2 class={bem('amount')} domPropsInnerHTML={this.faceAmount} />
            <p class={bem('condition')}>
              {this.coupon.condition || this.conditionMessage}
            </p>
          </div>
          <div class={bem('body')}>
            <p class={bem('name')}>{coupon.name}</p>
            <p class={bem('valid')}>{this.validPeriod}</p>
            {!this.disabled && (
              <Checkbox
                size={18}
                value={this.chosen}
                class={bem('corner')}
                checkedColor={RED}
              />
            )}
          </div>
        </div>
        {description && <p class={bem('description')}>{description}</p>}
      </div>
    );
  },
});
