import { use } from '../utils';

const [sfc, bem] = use('swipe-item');

export default sfc({
  data() {
    return {
      offset: 0
    };
  },

  beforeCreate() {
    this.$parent.swipes.push(this);
  },

  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },

  render(h) {
    const { vertical, computedWidth, computedHeight } = this.$parent;

    const style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`
    };

    return (
      <div class={bem()} style={style} {...{ on: this.$listeners }}>
        {this.slots()}
      </div>
    );
  }
});
