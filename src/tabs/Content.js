import { createNamespace } from '../utils';
import { TouchMixin } from '../mixins/touch';

const [createComponent, bem] = createNamespace('tabs');
const MIN_SWIPE_DISTANCE = 50;

export default createComponent({
  mixins: [TouchMixin],

  props: {
    count: Number,
    duration: [Number, String],
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number,
  },

  emits: ['change'],

  computed: {
    style() {
      if (this.animated) {
        return {
          transform: `translate3d(${-1 * this.currentIndex * 100}%, 0, 0)`,
          transitionDuration: `${this.duration}s`,
        };
      }
    },

    listeners() {
      if (this.swipeable) {
        return {
          onTouchstart: this.touchStart,
          onTouchmove: this.touchMove,
          onTouchend: this.onTouchEnd,
          onTouchcancel: this.onTouchEnd,
        };
      }
    },
  },

  methods: {
    // watch swipe touch end
    onTouchEnd() {
      const { direction, deltaX, currentIndex } = this;

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },

    genChildren() {
      const Content = this.$slots.default?.();
      if (this.animated) {
        return (
          <div class={bem('track')} style={this.style}>
            {Content}
          </div>
        );
      }

      return Content;
    },
  },

  render() {
    return (
      <div
        class={bem('content', { animated: this.animated })}
        {...this.listeners}
      >
        {this.genChildren()}
      </div>
    );
  },
});
