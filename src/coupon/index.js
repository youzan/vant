import { computed } from 'vue';
import { padZero, createNamespace } from '../utils';
import { RED } from '../utils/constant';
import Checkbox from '../checkbox';

const [createComponent, bem, t] = createNamespace('coupon');

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

  setup(props) {
    const validPeriod = computed(() => {
      const { startAt, endAt } = props.coupon;
      return `${getDate(startAt)} - ${getDate(endAt)}`;
    });

    const faceAmount = computed(() => {
      const { coupon, currency } = props;

      if (coupon.valueDesc) {
        return [coupon.valueDesc, <span>{coupon.unitDesc || ''}</span>];
      }

      if (coupon.denominations) {
        const denominations = formatAmount(coupon.denominations);
        return [<span>{currency}</span>, ` ${denominations}`];
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(coupon.discount));
      }

      return '';
    });

    const conditionMessage = computed(() => {
      const condition = formatAmount(props.coupon.originCondition);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    });

    return () => {
      const { chosen, coupon, disabled } = props;
      const description = (disabled && coupon.reason) || coupon.description;

      return (
        <div class={bem({ disabled })}>
          <div class={bem('content')}>
            <div class={bem('head')}>
              <h2 class={bem('amount')}>{faceAmount.value}</h2>
              <p class={bem('condition')}>
                {coupon.condition || conditionMessage.value}
              </p>
            </div>
            <div class={bem('body')}>
              <p class={bem('name')}>{coupon.name}</p>
              <p class={bem('valid')}>{validPeriod.value}</p>
              {!disabled && (
                <Checkbox
                  size={18}
                  class={bem('corner')}
                  modelValue={chosen}
                  checkedColor={RED}
                />
              )}
            </div>
          </div>
          {description && <p class={bem('description')}>{description}</p>}
        </div>
      );
    };
  },
});
