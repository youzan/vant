import { use } from '../utils';
import Icon from '../icon';
import findParent from '../mixins/find-parent';

const [sfc, bem] = use('radio');

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
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    },

    iconStyle() {
      const { checkedColor } = this;
      if (checkedColor && this.currentValue === this.name && !this.isDisabled) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    }
  },

  created() {
    this.findParent('van-radio-group');
  },

  methods: {
    onClickIcon() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    },

    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  },

  render(h) {
    const checked = this.currentValue === this.name;
    const CheckIcon = this.$scopedSlots.icon ? (
      this.$scopedSlots.icon({ checked })
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
          class={bem('icon', [this.shape, { disabled: this.isDisabled, checked }])}
          onClick={this.onClickIcon}
        >
          {CheckIcon}
        </div>
        {Label}
      </div>
    );
  }
});
