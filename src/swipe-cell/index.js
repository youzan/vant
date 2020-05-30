// Utils
import { createNamespace } from '../utils';
import { range } from '../utils/format/number';
import { preventDefault } from '../utils/dom/event';

// Mixins
import { TouchMixin } from '../mixins/touch';
import { ClickOutsideMixin } from '../mixins/click-outside';

const [createComponent, bem] = createNamespace('swipe-cell');
const THRESHOLD = 0.15;

export default createComponent({
  mixins: [
    TouchMixin,
    ClickOutsideMixin({
      event: 'touchstart',
      method: 'onClick',
    }),
  ],

  props: {
    // @deprecated
    // should be removed in next major version, use beforeClose instead
    onClose: Function,
    disabled: Boolean,
    leftWidth: [Number, String],
    rightWidth: [Number, String],
    beforeClose: Function,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: '',
    },
  },

  data() {
    return {
      offset: 0,
      dragging: false,
    };
  },

  computed: {
    computedLeftWidth() {
      return +this.leftWidth || this.getWidthByRef('left');
    },

    computedRightWidth() {
      return +this.rightWidth || this.getWidthByRef('right');
    },
  },

  mounted() {
    this.bindTouchEvent(this.$el);
  },

  methods: {
    getWidthByRef(ref) {
      if (this.$refs[ref]) {
        const rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }

      return 0;
    },

    // @exposed-api
    open(position) {
      const offset =
        position === 'left' ? this.computedLeftWidth : -this.computedRightWidth;

      this.opened = true;
      this.offset = offset;

      this.$emit('open', {
        position,
        name: this.name,
        // @deprecated
        // should be removed in next major version
        detail: this.name,
      });
    },

    // @exposed-api
    close(position) {
      this.offset = 0;

      if (this.opened) {
        this.opened = false;
        this.$emit('close', {
          position,
          name: this.name,
        });
      }
    },

    onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.startOffset = this.offset;
      this.touchStart(event);
    },

    onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        this.dragging = true;
        this.lockClick = true;

        const isPrevent = !this.opened || this.deltaX * this.startOffset < 0;

        if (isPrevent) {
          preventDefault(event, this.stopPropagation);
        }

        this.offset = range(
          this.deltaX + this.startOffset,
          -this.computedRightWidth,
          this.computedLeftWidth
        );
      }
    },

    onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragging) {
        this.toggle(this.offset > 0 ? 'left' : 'right');
        this.dragging = false;

        // compatible with desktop scenario
        setTimeout(() => {
          this.lockClick = false;
        }, 0);
      }
    },

    toggle(direction) {
      const offset = Math.abs(this.offset);
      const threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;
      const { computedLeftWidth, computedRightWidth } = this;

      if (
        computedRightWidth &&
        direction === 'right' &&
        offset > computedRightWidth * threshold
      ) {
        this.open('right');
      } else if (
        computedLeftWidth &&
        direction === 'left' &&
        offset > computedLeftWidth * threshold
      ) {
        this.open('left');
      } else {
        this.close();
      }
    },

    onClick(position = 'outside') {
      this.$emit('click', position);

      if (this.opened && !this.lockClick) {
        if (this.beforeClose) {
          this.beforeClose({
            position,
            name: this.name,
            instance: this,
          });
        } else if (this.onClose) {
          this.onClose(position, this, { name: this.name });
        } else {
          this.close(position);
        }
      }
    },

    getClickHandler(position, stop) {
      return (event) => {
        if (stop) {
          event.stopPropagation();
        }
        this.onClick(position);
      };
    },

    genLeftPart() {
      const content = this.slots('left');

      if (content) {
        return (
          <div
            ref="left"
            class={bem('left')}
            onClick={this.getClickHandler('left', true)}
          >
            {content}
          </div>
        );
      }
    },

    genRightPart() {
      const content = this.slots('right');

      if (content) {
        return (
          <div
            ref="right"
            class={bem('right')}
            onClick={this.getClickHandler('right', true)}
          >
            {content}
          </div>
        );
      }
    },
  },

  render() {
    const wrapperStyle = {
      transform: `translate3d(${this.offset}px, 0, 0)`,
      transitionDuration: this.dragging ? '0s' : '.6s',
    };

    return (
      <div class={bem()} onClick={this.getClickHandler('cell')}>
        <div class={bem('wrapper')} style={wrapperStyle}>
          {this.genLeftPart()}
          {this.slots()}
          {this.genRightPart()}
        </div>
      </div>
    );
  },
});
