import create from '../utils/create';
import createBem from '../utils/bem';

const bem = createBem('van-badge-group');

export default create({
  name: 'badge-group',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  provide() {
    return {
      vanBadgeGroup: this
    };
  },

  data() {
    return {
      badges: []
    };
  },

  render(h) {
    return (
      <div class={['van-hairline--top-bottom', bem()]}>
        {this.$slots.default}
      </div>
    );
  }
});
