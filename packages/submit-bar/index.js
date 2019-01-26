import { use } from '../utils';
import Button from '../button';

const [sfc, bem, t] = use('submit-bar');

export default sfc({
  props: {
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
  },

  render(h) {
    const { tip, price, $slots } = this;
    const hasPrice = typeof price === 'number';

    return (
      <div class={bem()}>
        {$slots.top}
        {($slots.tip || tip) && (
          <div class={bem('tip')}>
            {tip}
            {$slots.tip}
          </div>
        )}
        <div class={bem('bar')}>
          {$slots.default}
          <div class={bem('text')}>
            {hasPrice && [
              <span>{this.label || t('label')}</span>,
              <span class={bem('price')}>{`${this.currency} ${(price / 100).toFixed(2)}`}</span>
            ]}
          </div>
          <Button
            square
            size="large"
            type={this.buttonType}
            loading={this.loading}
            disabled={this.disabled}
            text={this.loading ? '' : this.buttonText}
            onClick={() => {
              this.$emit('submit');
            }}
          />
        </div>
      </div>
    );
  }
});
