import { use } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [sfc, bem] = use('index-anchor');

export default sfc({
  mixins: [ChildrenMixin('vanIndexBar', { indexKey: 'childrenIndex' })],

  props: {
    index: [String, Number]
  },

  methods: {
    scrollIntoView() {
      this.$el.scrollIntoView();
    }
  },

  render(h) {
    return (
      <div class={bem()}>
        {this.slots('default') ? this.slots('default') : this.index}
      </div>
    );
  }
});
