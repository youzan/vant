import { use, range } from '../utils';
import { preventDefault } from '../utils/event';
import { TouchMixin } from '../mixins/touch';
import { ClickOutsideMixin } from '../mixins/click-outside';

const [sfc, bem] = use('swipe-cell');
const THRESHOLD = 0.15;

export default sfc({
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
    rightWidth: Number
  },

  data() {
    return {
      offset: 0,
      dragging: false
    };
  },

  computed: {
    computedLeftWidth() {
      if (this.leftWidth) {
        return this.leftWidth;
      }

      const rect = this.$refs.left.getBoundingClientRect();
      return rect.width;
    },

    computedRightWidth() {
      if (this.rightWidth) {
        return this.rightWidth;
      }

      const rect = this.$refs.right.getBoundingClientRect();
      return rect.width;
    }
  },

  methods: {
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
        preventDefault(event);
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
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  },

  render(h) {
    const onClick = (position, stop) => event => {
      if (stop) {
        event.stopPropagation();
      }
      this.onClick(position);
    };

    const wrapperStyle = {
      transform: `translate3d(${this.offset}px, 0, 0)`,
      transition: this.dragging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
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
