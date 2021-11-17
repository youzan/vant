import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';
import { ChildrenMixin } from '../mixins/relation';


// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('popover-item');

export default createComponent({
  mixins: [
    ChildrenMixin('vanPopover')
  ],

  props: {
    value: Boolean,
    text: String,
    disabled: Boolean,
    icon: String
  },

  watch: {
  },

  mounted() {
  },

  beforeDestroy() {
  },

  methods: {
    onClickAction(context, index) {
      this.parent.onClickAction(context, index);
    }
  },

  render() {
    const { icon, text, disabled, className } = this;
      return (
      <div
        role="menuitem"
        class={[bem('action', { disabled, 'with-icon': icon }), className]}
        onClick={() => this.onClickAction(this, this.index)}
      >
        {icon && <Icon name={icon} class={bem('action-icon')} />}
        <div class={[bem('action-text'), BORDER_BOTTOM]}>{text}</div>
      </div>
    );
  },
});
