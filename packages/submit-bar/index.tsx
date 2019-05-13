import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Button, { ButtonType } from '../button';
import Icon from '../icon';

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
  suffixLabel?: string;
  decimalLength: number;
  safeAreaInsetBottom?: boolean;
};

export type SubmitBarSlots = DefaultSlots & {
  top?: ScopedSlot;
  tip?: ScopedSlot;
};

const [sfc, bem, t] = use('submit-bar');

function SubmitBar(
  h: CreateElement,
  props: SubmitBarProps,
  slots: SubmitBarSlots,
  ctx: RenderContext<SubmitBarProps>
) {
  const { tip, price, tipIcon } = props;

  function Text() {
    if (typeof price === 'number') {
      const priceText = `${props.currency} ${(price / 100).toFixed(props.decimalLength)}`;

      return (
        <div class={bem('text')}>
          <span>{props.label || t('label')}</span>
          <span class={bem('price')}>{priceText}</span>
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
    <div
      class={bem({ 'safe-area-inset-bottom': props.safeAreaInsetBottom })}
      {...inherit(ctx)}
    >
      {slots.top && slots.top()}
      {Tip()}
      <div class={bem('bar')}>
        {slots.default && slots.default()}
        {Text()}
        <Button
          square
          size="large"
          class={bem('button')}
          type={props.buttonType}
          loading={props.loading}
          disabled={props.disabled}
          text={props.loading ? '' : props.buttonText}
          onClick={() => {
            emit(ctx, 'submit');
          }}
        />
      </div>
    </div>
  );
}

SubmitBar.props = {
  tip: String,
  tipIcon: String,
  label: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  price: {
    type: Number,
    default: null
  },
  decimalLength: {
    type: Number,
    default: 2
  },
  currency: {
    type: String,
    default: '¥'
  },
  buttonType: {
    type: String,
    default: 'danger'
  }
};

export default sfc<SubmitBarProps, {}, SubmitBarSlots>(SubmitBar);
