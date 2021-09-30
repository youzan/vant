import { PropType, CSSProperties, defineComponent } from 'vue';
import {
  truthProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
} from '../utils';

// Components
import { Icon } from '../icon';
import { Button, ButtonType } from '../button';

const [name, bem, t] = createNamespace('submit-bar');

export default defineComponent({
  name,

  props: {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    currency: makeStringProp('¥'),
    disabled: Boolean,
    textAlign: String as PropType<CSSProperties['textAlign']>,
    buttonText: String,
    buttonType: makeStringProp<ButtonType>('danger'),
    buttonColor: String,
    suffixLabel: String,
    decimalLength: makeNumericProp(2),
    safeAreaInsetBottom: truthProp,
  },

  emits: ['submit'],

  setup(props, { emit, slots }) {
    const renderText = () => {
      const { price, label, currency, textAlign, suffixLabel, decimalLength } =
        props;

      if (typeof price === 'number') {
        const pricePair = (price / 100).toFixed(+decimalLength).split('.');
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

    const onClickButton = () => emit('submit');

    const renderButton = () => {
      if (slots.button) {
        return slots.button();
      }

      return (
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
    };

    return () => (
      <div
        class={[bem(), { 'van-safe-area-bottom': props.safeAreaInsetBottom }]}
      >
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
