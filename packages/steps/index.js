import { use } from '../utils';
import { GREEN } from '../utils/color';

const [sfc, bem] = use('steps');

export default sfc({
  props: {
    active: Number,
    inactiveIcon: String,
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

  data() {
    return {
      steps: []
    };
  },

  render(h) {
    return (
      <div class={bem([this.direction])}>
        <div class={bem('items')}>{this.slots()}</div>
      </div>
    );
  }
});
