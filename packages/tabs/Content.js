import { createNamespace } from '../utils';
import { TouchMixin } from '../mixins/touch';

const [createComponent, bem] = createNamespace('tabs');
const MIN_SWIPE_DISTANCE = 50;

export default createComponent({
  mixins: [TouchMixin],

  props: {
    count: Number,
    active: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean
  },

  computed: {
    style() {
      if (this.animated) {
        return {
          transform: `translate3d(${-1 * this.active * 100}%, 0, 0)`,
          transitionDuration: `${this.duration}s`
        };
      }
    },

    listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },

  methods: {
    // watch swipe touch end
    onTouchEnd() {
      const { direction, deltaX, active } = this;

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && active !== 0) {
          this.$emit('change', active - 1);
        } else if (deltaX < 0 && active !== this.count - 1) {
          this.$emit('change', active + 1);
        }
      }
    },

    renderChildren() {
      if (this.animated) {
        return (
          <div class={bem('track')} style={this.style}>
            {this.slots()}
          </div>
        );
      }

      return this.slots();
    }
  },

  render(h) {
    return (
      <div
        class={bem('content', { animated: this.animated })}
        {...{ on: this.listeners }}
      >
        {this.renderChildren()}
      </div>
    );
  }
});
