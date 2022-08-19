import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';
import { ChildrenMixin } from '../mixins/relation';


// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('popover-combination-item');

export default createComponent({
  mixins: [
    ChildrenMixin('vanPopoverCombination')
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
    onClickAction(context, index, e) {
      if (this.$env?.VUE_APP_DESIGNER) {
        e.stopPropagation();
        return;
      }
      this.parent.onClickAction(context, index);
    }
  },

  render() {
    const { icon, text, disabled, className, slots } = this;
      return (
      <div
        role="menuitem"
        class={[bem('action', { disabled, 'with-icon': icon }), className]}
        onClick={(e) => this.onClickAction(this, this.index,e)}
        vusion-slot-name="default"
      >
        {icon && <Icon name={icon} class={bem('action-icon')} />}
        {/* <div class={[bem('action-text'), BORDER_BOTTOM]}>{text}</div> */}
        {slots() ? <div class={[bem('action-text'), BORDER_BOTTOM]}>{slots()}</div> : null}
        {!slots() ? <van-empty-col></van-empty-col> : null}
      </div>
    );
  },
});
