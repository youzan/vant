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

  render() {
    const { vertical, computedWidth, computedHeight } = this.parent;

    const style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`,
    };

    return (
      <div class={bem()} style={style} {...{ on: this.$listeners }}>
        {this.slots()}
      </div>
    );
  },
});
