import { createNamespace } from '../utils';
import { range } from '../utils/format/number';
import { preventDefault } from '../utils/dom/event';
import { TouchMixin } from '../mixins/touch';
import { ClickOutsideMixin } from '../mixins/click-outside';

const [createComponent, bem] = createNamespace('swipe-cell');
const THRESHOLD = 0.15;

export default createComponent({
  mixins: [
    TouchMixin,
    ClickOutsideMixin({
      event: 'touchstart',
      method: 'onClick'
    })
  ],

  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: ''
    }
  },

  data() {
    return {
      offset: 0,
      dragging: false
    };
  },

  computed: {
    computedLeftWidth() {
      return this.leftWidth || this.getWidthByRef('left');
    },

    computedRightWidth() {
      return this.rightWidth || this.getWidthByRef('right');
    }
  },

  methods: {
    getWidthByRef(ref) {
      if (this.$refs[ref]) {
        const rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }

      return 0;
    },

    open(position) {
      const offset = position === 'left' ? this.computedLeftWidth : -this.computedRightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },

    close() {
      this.offset = 0;
    },

    resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },

    swipeMove(offset = 0) {
      this.offset = range(offset, -this.computedRightWidth, this.computedLeftWidth);

      if (this.offset) {
        this.swiping = true;
      } else {
        this.opened = false;
      }
    },

    swipeLeaveTransition(direction) {
      const { offset, computedLeftWidth, computedRightWidth } = this;
      const threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;

      // right
      if (
        direction === 'right' &&
        -offset > computedRightWidth * threshold &&
        computedRightWidth > 0
      ) {
        this.open('right');
        // left
      } else if (
        direction === 'left' &&
        offset > computedLeftWidth * threshold &&
        computedLeftWidth > 0
      ) {
        this.open('left');
        // reset
      } else {
        this.swipeMove(0);
      }
    },

    startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.dragging = true;
      this.startOffset = this.offset;
      this.touchStart(event);
    },

    onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        const shouldPrevent = !this.opened || this.deltaX * this.startOffset < 0;

        if (shouldPrevent) {
          preventDefault(event, this.stopPropagation);
        }

        this.swipeMove(this.deltaX + this.startOffset);
      }
    },

    endDrag() {
      if (this.disabled) {
        return;
      }

      this.dragging = false;
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? 'left' : 'right');
      }
    },

    onClick(position = 'outside') {
      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this, { name: this.name });
      } else {
        this.swipeMove(0);
      }
    }
  },

  render() {
    const onClick = (position, stop) => event => {
      if (stop) {
        event.stopPropagation();
      }
      this.onClick(position);
    };

    const wrapperStyle = {
      transform: `translate3d(${this.offset}px, 0, 0)`,
      transitionDuration: this.dragging ? '0s' : '.6s'
    };

    return (
      <div
        class={bem()}
        onClick={onClick('cell')}
        onTouchstart={this.startDrag}
        onTouchmove={this.onDrag}
        onTouchend={this.endDrag}
        onTouchcancel={this.endDrag}
      >
        <div
          class={bem('wrapper')}
          style={wrapperStyle}
          onTransitionend={() => {
            this.swiping = false;
          }}
        >
          {this.slots('left') && (
            <div ref="left" class={bem('left')} onClick={onClick('left', true)}>
              {this.slots('left')}
            </div>
          )}
          {this.slots()}
          {this.slots('right') && (
            <div ref="right" class={bem('right')} onClick={onClick('right', true)}>
              {this.slots('right')}
            </div>
          )}
        </div>
      </div>
    );
  }
});
