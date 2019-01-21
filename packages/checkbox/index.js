import { use } from '../utils';
import Icon from '../icon';
import findParent from '../mixins/find-parent';

const [sfc, bem] = use('checkbox');

export default sfc({
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

  computed: {
    checked: {
      get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },

      set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    },

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

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  created() {
    this.findParent('van-checkbox-group');
  },

  methods: {
    toggle(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    },

    setParentValue(val) {
      const { parent } = this;
      const value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }

        /* istanbul ignore else */
        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        const index = value.indexOf(this.name);

        /* istanbul ignore else */
        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
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
        onClick={() => {
          this.toggle('label');
        }}
      >
        {this.$slots.default}
      </span>
    );

    return (
      <div class={bem()}>
        <div
          class={bem('icon', [this.shape, { disabled: this.isDisabled, checked: this.checked }])}
          onClick={this.toggle}
        >
          {CheckIcon}
        </div>
        {Label}
      </div>
    );
  }
});
