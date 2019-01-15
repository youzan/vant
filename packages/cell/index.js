import { use, isDef } from '../utils';
import Icon from '../icon';
import CellMixin from '../mixins/cell';
import RouterLink from '../mixins/router-link';

const [sfc, bem] = use('cell');

export default sfc({
  mixins: [CellMixin, RouterLink],

  props: {
    size: String,
    clickable: Boolean,
    arrowDirection: String
  },

  methods: {
    onClick() {
      this.$emit('click');
      this.routerLink();
    }
  },

  render(h) {
    const slots = this.$slots;
    const showTitle = slots.title || isDef(this.title);
    const showValue = slots.default || isDef(this.value);

    const Title = showTitle && (
      <div class={[bem('title'), this.titleClass]}>
        {slots.title || <span>{this.title}</span>}
        {this.label && <div class={[bem('label'), this.labelClass]}>{this.label}</div>}
      </div>
    );

    const Value = showValue && (
      <div class={[bem('value', { alone: !slots.title && !this.title }), this.valueClass]}>
        {slots.default || <span>{this.value}</span>}
      </div>
    );

    const LeftIcon = slots.icon || (
      this.icon && <Icon class={bem('left-icon')} name={this.icon} />
    );

    const arrowIcon = this.arrowDirection ? `arrow-${this.arrowDirection}` : 'arrow';
    const RightIcon = slots['right-icon'] || (
      this.isLink && <Icon class={bem('right-icon')} name={arrowIcon} />
    );

    return (
      <div
        class={bem({
          center: this.center,
          required: this.required,
          borderless: !this.border,
          clickable: this.isLink || this.clickable,
          [this.size]: this.size
        })}
        onClick={this.onClick}
      >
        {LeftIcon}
        {Title}
        {Value}
        {RightIcon}
        {slots.extra}
      </div>
    );
  }
});
