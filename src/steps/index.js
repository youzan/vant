import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('steps');

export default createComponent({
  mixins: [ParentMixin('vanSteps')],

  props: {
    center: Boolean,
    iconPrefix: String,
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String,
    active: {
      type: [Number, String],
      default: 0,
    },
    direction: {
      type: String,
      default: 'horizontal',
    },
    activeIcon: {
      type: String,
      default: 'checked',
    },
  },

  render() {
    return (
      <div class={bem([this.direction])}>
        <div class={bem('items')}>{this.slots()}</div>
      </div>
    );
  },
});
