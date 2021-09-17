/**
 * Common part of Checkbox & Radio
 */
import Icon from '../icon';
import { FieldMixin } from './field';
import { ChildrenMixin } from './relation';
import { addUnit } from '../utils';

export const CheckboxMixin = ({ parent, bem, role }) => ({
  mixins: [ChildrenMixin(parent), FieldMixin],

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
      default: 'round',
    },
    bindGroup: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    disableBindRelation() {
      return !this.bindGroup;
    },

    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled;
    },

    direction() {
      return (this.parent && this.parent.direction) || null;
    },

    iconStyle() {
      const checkedColor =
        this.checkedColor || (this.parent && this.parent.checkedColor);

      if (checkedColor && this.checked && !this.isDisabled) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor,
        };
      }
    },

    tabindex() {
      if (this.isDisabled || (role === 'radio' && !this.checked)) {
        return -1;
      }

      return 0;
    },
  },

  methods: {
    onClick(event) {
      const { target } = event;
      const { icon } = this.$refs;
      const iconClicked = icon === target || icon?.contains(target);

      if (!this.isDisabled && (iconClicked || !this.labelDisabled)) {
        this.toggle();

        // wait for toggle method to complete
        // so we can get the changed value in the click event listener
        setTimeout(() => {
          this.$emit('click', event);
        });
      } else {
        this.$emit('click', event);
      }
    },

    genIcon() {
      const { checked } = this;
      const iconSize = this.iconSize || (this.parent && this.parent.iconSize);

      return (
        <div
          ref="icon"
          class={bem('icon', [
            this.shape,
            { disabled: this.isDisabled, checked },
          ])}
          style={{ fontSize: addUnit(iconSize) }}
        >
          {this.slots('icon', { checked }) || (
            <Icon name="success" style={this.iconStyle} />
          )}
        </div>
      );
    },

    genLabel() {
      const slot = this.slots();

      if (slot) {
        return (
          <span
            class={bem('label', [
              this.labelPosition,
              { disabled: this.isDisabled },
            ])}
          >
            {slot}
          </span>
        );
      }
    },
  },

  render() {
    const Children = [this.genIcon()];

    if (this.labelPosition === 'left') {
      Children.unshift(this.genLabel());
    } else {
      Children.push(this.genLabel());
    }

    return (
      <div
        role={role}
        class={bem([
          {
            disabled: this.isDisabled,
            'label-disabled': this.labelDisabled,
          },
          this.direction,
        ])}
        tabindex={this.tabindex}
        aria-checked={String(this.checked)}
        onClick={this.onClick}
      >
        {Children}
      </div>
    );
  },
});
