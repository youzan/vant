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
    labelDisabled: Boolean
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
    }
  },

  created() {
    this.findParent('van-radio-group');
  },

  methods: {
    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  },

  render(h) {
    const checked = this.currentValue === this.name;
    const { isDisabled, checkedColor } = this;
    const iconStyle = checkedColor && checked && !isDisabled && { color: checkedColor };

    return (
      <div
        class={bem({ disabled: isDisabled })}
        onClick={() => {
          this.$emit('click');
        }}
      >
        <span class={bem('input')}>
          <input
            vModel={this.currentValue}
            type="radio"
            class={bem('control')}
            value={this.name}
            disabled={isDisabled}
          />
          <Icon style={iconStyle} name={checked ? 'checked' : 'circle'} />
        </span>
        {this.$slots.default && (
          <span class={bem('label', this.labelPosition)} onClick={this.onClickLabel}>
            {this.$slots.default}
          </span>
        )}
      </div>
    );
  }
});
