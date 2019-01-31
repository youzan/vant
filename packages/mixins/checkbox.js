/**
 * Common part of Checkbox & Radio
 */
import Icon from '../icon';
import findParent from './find-parent';

export default ({ parent, bem }) => ({
  mixins: [findParent],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
  },

  created() {
    this.findParent(parent);
  },

  computed: {
    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled;
    },

    iconStyle() {
      const { checkedColor } = this;
      if (checkedColor && this.checked && !this.isDisabled) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    }
  },

  render(h) {
    const CheckIcon = this.$scopedSlots.icon ? (
      this.$scopedSlots.icon({ checked: this.checked })
    ) : (
      <Icon name="success" style={this.iconStyle} />
    );

    const Label = this.$slots.default && (
      <span
        class={bem('label', [this.labelPosition, { disabled: this.isDisabled }])}
        onClick={this.onClickLabel}
      >
        {this.$slots.default}
      </span>
    );

    return (
      <div
        class={bem()}
        onClick={() => {
          this.$emit('click');
        }}
      >
        <div
          class={bem('icon', [this.shape, { disabled: this.isDisabled, checked: this.checked }])}
          onClick={this.onClickIcon}
        >
          {CheckIcon}
        </div>
        {Label}
      </div>
    );
  }
});
