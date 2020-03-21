import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('swipe-item');

export default createComponent({
  mixins: [ChildrenMixin('vanSwipe')],

  data() {
    return {
      offset: 0,
    };
  },

  computed: {
    style() {
      const style = {};
      const { vertical, computedWidth, computedHeight } = this.parent;

      if (vertical) {
        style.height = `${computedHeight}px`;
      } else {
        style.width = `${computedWidth}px`;
      }

      if (this.offset) {
        style.transform = `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`;
      }

      return style;
    },
  },

  render() {
    return (
      <div class={bem()} style={this.style} {...{ on: this.$listeners }}>
        {this.slots()}
      </div>
    );
  },
});
