import { createNamespace } from '../utils';
import { GREEN } from '../utils/constant';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('steps');

export default createComponent({
  mixins: [ParentMixin('vanSteps')],

  props: {
    inactiveIcon: String,
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: GREEN
    },
    activeIcon: {
      type: String,
      default: 'checked'
    }
  },

  render() {
    return (
      <div class={bem([this.direction])}>
        <div class={bem('items')}>{this.slots()}</div>
      </div>
    );
  }
});
