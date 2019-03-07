import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Button from '../button';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/use/sfc';

export type SubmitBarProps = {
  tip?: string;
  label?: string;
  price?: number;
  loading?: boolean;
  currency: string;
  disabled?: boolean;
  buttonType: string;
  buttonText?: string;
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
  const { tip, price } = props;
  const hasPrice = typeof price === 'number';

  return (
    <div class={bem()} {...inherit(ctx)}>
      {slots.top && slots.top()}
      {(slots.tip || tip) && (
        <div class={bem('tip')}>
          {tip}
          {slots.tip && slots.tip()}
        </div>
      )}
      <div class={bem('bar')}>
        {slots.default && slots.default()}
        <div class={bem('text')}>
          {hasPrice && [
            <span>{props.label || t('label')}</span>,
            <span class={bem('price')}>{`${props.currency} ${(
              (price as number) / 100
            ).toFixed(2)}`}</span>
          ]}
        </div>
        <Button
          square
          size="large"
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
  label: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  price: {
    type: Number,
    default: null
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
