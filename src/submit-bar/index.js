import { createNamespace } from '../utils';
import Icon from '../icon';
import Button from '../button';

const [createComponent, bem, t] = createNamespace('submit-bar');

export default createComponent({
  props: {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonColor: String,
    suffixLabel: String,
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
    decimalLength: {
      type: [Number, String],
      default: 2,
    },
    currency: {
      type: String,
      default: '¥',
    },
    buttonType: {
      type: String,
      default: 'danger',
    },
  },

  emits: ['submit'],

  setup(props, { emit, slots }) {
    return () => {
      const { tip, price, tipIcon } = props;

      function Text() {
        if (typeof price === 'number') {
          const priceArr = (price / 100)
            .toFixed(props.decimalLength)
            .split('.');
          const decimalStr = props.decimalLength ? `.${priceArr[1]}` : '';
          return (
            <div
              style={{ textAlign: props.textAlign ? props.textAlign : '' }}
              class={bem('text')}
            >
              <span>{props.label || t('label')}</span>
              <span class={bem('price')}>
                {props.currency}
                <span class={bem('price', 'integer')}>{priceArr[0]}</span>
                {decimalStr}
              </span>
              {props.suffixLabel && (
                <span class={bem('suffix-label')}>{props.suffixLabel}</span>
              )}
            </div>
          );
        }
      }

      function Tip() {
        if (slots.tip || tip) {
          return (
            <div class={bem('tip')}>
              {tipIcon && <Icon class={bem('tip-icon')} name={tipIcon} />}
              {tip && <span class={bem('tip-text')}>{tip}</span>}
              {slots.tip && slots.tip()}
            </div>
          );
        }
      }

      return (
        <div class={bem({ unfit: !props.safeAreaInsetBottom })}>
          {slots.top && slots.top()}
          {Tip()}
          <div class={bem('bar')}>
            {slots.default && slots.default()}
            {Text()}
            <Button
              round
              class={bem('button', props.buttonType)}
              type={props.buttonType}
              color={props.buttonColor}
              loading={props.loading}
              disabled={props.disabled}
              text={props.loading ? '' : props.buttonText}
              onClick={() => {
                emit('submit');
              }}
            />
          </div>
        </div>
      );
    };
  },
});
