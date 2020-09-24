import { addUnit } from '../utils';
import Icon from '../icon';

export const checkerProps = {
  name: null,
  disabled: Boolean,
  iconSize: [Number, String],
  modelValue: null,
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
};

export default {
  props: {
    ...checkerProps,
    bem: Function,
    role: String,
    parent: Object,
    checked: Boolean,
  },

  emits: ['click', 'toggle'],

  computed: {
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
      return this.isDisabled ? -1 : 0;
    },

    disableBindRelation() {
      return !this.bindGroup;
    },
  },

  methods: {
    onClick(event) {
      const { target } = event;
      const { icon } = this.$refs;
      const iconClicked = icon === target || icon.contains(target);

      if (!this.isDisabled && (iconClicked || !this.labelDisabled)) {
        this.$emit('toggle');

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
          class={this.bem('icon', [
            this.shape,
            { disabled: this.isDisabled, checked },
          ])}
          style={{ fontSize: addUnit(iconSize) }}
        >
          {this.$slots.icon ? (
            this.$slots.icon({ checked })
          ) : (
            <Icon name="success" style={this.iconStyle} />
          )}
        </div>
      );
    },

    genLabel() {
      if (this.$slots.default) {
        return (
          <span
            class={this.bem('label', [
              this.labelPosition,
              { disabled: this.isDisabled },
            ])}
          >
            {this.$slots.default()}
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
        role={this.role}
        class={this.bem([
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
};
