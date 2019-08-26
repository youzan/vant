/**
 * Common part of Checkbox & Radio
 */
import Icon from '../icon';
import { ChildrenMixin } from './relation';
import { addUnit } from '../utils';

export const CheckboxMixin = ({ parent, bem, role }) => ({
  mixins: [ChildrenMixin(parent)],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    iconSize: [Number, String],
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
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
    },

    tabindex() {
      if (this.isDisabled || (role === 'radio' && !this.checked)) {
        return -1;
      }

      return 0;
    }
  },

  methods: {
    onClick(event) {
      const { label } = this.$refs;
      const { target } = event;
      const labelClicked = label && (label === target || label.contains(target));

      if (!this.isDisabled && !(labelClicked && this.labelDisabled)) {
        this.toggle();
      }

      this.$emit('click', event);
    }
  },

  render() {
    const { slots, checked } = this;

    const CheckIcon = slots('icon', { checked }) || (
      <Icon name="success" style={this.iconStyle} />
    );

    const Label = slots() && (
      <span
        ref="label"
        class={bem('label', [this.labelPosition, { disabled: this.isDisabled }])}
      >
        {slots()}
      </span>
    );

    const Children = [
      <div
        class={bem('icon', [this.shape, { disabled: this.isDisabled, checked }])}
        style={{ fontSize: addUnit(this.iconSize) }}
      >
        {CheckIcon}
      </div>
    ];

    if (this.labelPosition === 'left') {
      Children.unshift(Label);
    } else {
      Children.push(Label);
    }

    return (
      <div
        role={role}
        class={bem()}
        tabindex={this.tabindex}
        aria-checked={String(this.checked)}
        onClick={this.onClick}
      >
        {Children}
      </div>
    );
  }
});
