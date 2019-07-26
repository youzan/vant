import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('swipe-item');

export default createComponent({
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

  render() {
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
