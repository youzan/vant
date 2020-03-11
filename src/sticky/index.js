import { isHidden } from '../utils/dom/style';
import { createNamespace, isDef } from '../utils';
import { getScrollTop, getElementTop, getScroller } from '../utils/dom/scroll';
import { BindEventMixin } from '../mixins/bind-event';

const [createComponent, bem] = createNamespace('sticky');

export default createComponent({
  mixins: [
    BindEventMixin(function(bind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }

      bind(this.scroller, 'scroll', this.onScroll, true);
      this.onScroll();
    }),
  ],

  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0,
    },
  },

  data() {
    return {
      fixed: false,
      height: 0,
      transform: 0,
    };
  },

  computed: {
    style() {
      if (!this.fixed) {
        return;
      }

      const style = {};

      if (isDef(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = `${this.offsetTop}px`;
      }

      if (this.transform) {
        style.transform = `translate3d(0, ${this.transform}px, 0)`;
      }

      return style;
    },
  },

  methods: {
    onScroll() {
      if (isHidden(this.$el)) {
        return;
      }

      this.height = this.$el.offsetHeight;

      const { container } = this;
      const offsetTop = +this.offsetTop;
      const scrollTop = getScrollTop(window);
      const topToPageTop = getElementTop(this.$el);

      const emitScrollEvent = () => {
        this.$emit('scroll', {
          scrollTop,
          isFixed: this.fixed,
        });
      };

      // The sticky component should be kept inside the container element
      if (container) {
        const bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          const distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    },
  },

  render() {
    const { fixed } = this;
    const style = {
      height: fixed ? `${this.height}px` : null,
    };

    return (
      <div style={style}>
        <div class={bem({ fixed })} style={this.style}>
          {this.slots()}
        </div>
      </div>
    );
  },
});
