import { addUnit, createNamespace } from '../utils';
import { FieldMixin } from '../mixins/field';
import { ChildrenMixin } from '../mixins/relation';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('checkbox');

export default createComponent({
  mixins: [FieldMixin, ChildrenMixin('vanCheckbox')],

  props: {
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
  },

  emits: ['click', 'change', 'update:modelValue'],

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
      if (this.isDisabled) {
        return -1;
      }

      return 0;
    },

    checked: {
      get() {
        if (this.parent) {
          return this.parent.modelValue.indexOf(this.name) !== -1;
        }
        return this.modelValue;
      },

      set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('update:modelValue', val);
        }
      },
    },
  },

  watch: {
    modelValue(val) {
      this.$emit('change', val);
    },
  },

  methods: {
    onClick(event) {
      const { target } = event;
      const { icon } = this.$refs;
      const iconClicked = icon === target || icon.contains(target);

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
            class={bem('label', [
              this.labelPosition,
              { disabled: this.isDisabled },
            ])}
          >
            {this.$slots.default()}
          </span>
        );
      }
    },

    // @exposed-api
    toggle(checked = !this.checked) {
      // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.
      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(() => {
        this.checked = checked;
      });
    },

    setParentValue(val) {
      const { parent } = this;
      const value = parent.modelValue.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }

        /* istanbul ignore else */
        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('update:modelValue', value);
        }
      } else {
        const index = value.indexOf(this.name);

        /* istanbul ignore else */
        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('update:modelValue', value);
        }
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
        role="checkbox"
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
