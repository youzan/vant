import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import VanEmptyCol from '../emptycol/index';

const [createComponent, bem] = createNamespace('swipe-item');

export default createComponent({
  mixins: [ChildrenMixin('vanSwipe')],

  data() {
    return {
      offset: 0,
      inited: false,
      mounted: false,
    };
  },
  components: {
    VanEmptyCol,
  },
  mounted() {
    this.$nextTick(() => {
      this.mounted = true;
    });
  },

  computed: {
    style() {
      const style = {};
      const { size, vertical } = this.parent;

      if (size) {
        style[vertical ? 'height' : 'width'] = `${size}px`;
      }

      if (this.offset) {
        style.transform = `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`;
      }

      return style;
    },

    shouldRender() {
      const { index, inited, parent, mounted } = this;

      if (!parent.lazyRender || inited) {
        return true;
      }

      // wait for all item to mount, so we can get the exact count
      if (!mounted) {
        return false;
      }

      const active = parent.activeIndicator;
      const maxActive = parent.count - 1;
      const prevActive = active === 0 && parent.loop ? maxActive : active - 1;
      const nextActive = active === maxActive && parent.loop ? 0 : active + 1;
      const shouldRender =
        index === active || index === prevActive || index === nextActive;

      if (shouldRender) {
        this.inited = true;
      }

      return shouldRender;
    },
  },

  render() {
    const designer = this.$env && this.$env.VUE_APP_DESIGNER;
    return (
      <div class={bem()} style={this.style} {...{ on: this.$listeners }}>
        {designer && !this.slots() ? <van-empty-col style="height: 100%;"></van-empty-col> : null}
        {this.shouldRender && this.slots()}
      </div>
    );
  },
});
