// Utils
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';

// Components
import Icon from '../icon';
import Button, { ButtonType } from '../button';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/types';

export type SubmitBarProps = {
  tip?: string;
  tipIcon?: string;
  label?: string;
  price?: number;
  loading?: boolean;
  currency: string;
  disabled?: boolean;
  buttonType: ButtonType;
  buttonText?: string;
  buttonColor?: string;
  suffixLabel?: string;
  decimalLength: number;
  safeAreaInsetBottom?: boolean;
  textAlign?: 'right' | 'left';
};

export type SubmitBarSlots = DefaultSlots & {
  top?: ScopedSlot;
  tip?: ScopedSlot;
  button?: ScopedSlot;
};

const [createComponent, bem, t] = createNamespace('submit-bar');

function SubmitBar(
  h: CreateElement,
  props: SubmitBarProps,
  slots: SubmitBarSlots,
  ctx: RenderContext<SubmitBarProps>
) {
  const { tip, price, tipIcon } = props;

  function Text() {
    if (typeof price === 'number') {
      const priceArr = (price / 100).toFixed(props.decimalLength).split('.');
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
    <div class={bem({ unfit: !props.safeAreaInsetBottom })} {...inherit(ctx)}>
      {slots.top && slots.top()}
      {Tip()}
      <div class={bem('bar')}>
        {slots.default && slots.default()}
        {Text()}
        {slots.button ? (
          slots.button()
        ) : (
          <Button
            round
            type={props.buttonType}
            text={props.loading ? '' : props.buttonText}
            color={props.buttonColor}
            class={bem('button', props.buttonType)}
            loading={props.loading}
            disabled={props.disabled}
            onClick={() => {
              emit(ctx, 'submit');
            }}
          />
        )}
      </div>
    </div>
  );
}

SubmitBar.props = {
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
};

export default createComponent<SubmitBarProps, {}, SubmitBarSlots>(SubmitBar);
