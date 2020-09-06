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
    const renderText = () => {
      const {
        price,
        label,
        currency,
        textAlign,
        suffixLabel,
        decimalLength,
      } = props;

      if (typeof price === 'number') {
        const pricePair = (price / 100).toFixed(decimalLength).split('.');
        const decimal = decimalLength ? `.${pricePair[1]}` : '';

        return (
          <div class={bem('text')} style={{ textAlign }}>
            <span>{label || t('label')}</span>
            <span class={bem('price')}>
              {currency}
              <span class={bem('price-integer')}>{pricePair[0]}</span>
              {decimal}
            </span>
            {suffixLabel && (
              <span class={bem('suffix-label')}>{suffixLabel}</span>
            )}
          </div>
        );
      }
    };

    const renderTip = () => {
      const { tip, tipIcon } = props;
      if (slots.tip || tip) {
        return (
          <div class={bem('tip')}>
            {tipIcon && <Icon class={bem('tip-icon')} name={tipIcon} />}
            {tip && <span class={bem('tip-text')}>{tip}</span>}
            {slots.tip?.()}
          </div>
        );
      }
    };

    const onClickButton = () => {
      emit('submit');
    };

    const renderButton = () => (
      <Button
        round
        type={props.buttonType}
        text={props.buttonText}
        class={bem('button', props.buttonType)}
        color={props.buttonColor}
        loading={props.loading}
        disabled={props.disabled}
        onClick={onClickButton}
      />
    );

    return () => (
      <div class={bem({ unfit: !props.safeAreaInsetBottom })}>
        {slots.top?.()}
        {renderTip()}
        <div class={bem('bar')}>
          {slots.default?.()}
          {renderText()}
          {renderButton()}
        </div>
      </div>
    );
  },
});
