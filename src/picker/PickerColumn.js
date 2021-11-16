import { deepClone } from '../utils/deep-clone';
import { createNamespace, inBrowser, isObject } from '../utils';
import { range } from '../utils/format/number';
import { preventDefault, on, off } from '../utils/dom/event';
import { TouchMixin } from '../mixins/touch';

const DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
export const MOMENTUM_LIMIT_TIME = 300;
export const MOMENTUM_LIMIT_DISTANCE = 15;

const [createComponent, bem] = createNamespace('picker-column');

function getElementTranslateY(element) {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

  return Number(translateY);
}

function isOptionDisabled(option) {
  return isObject(option) && option.disabled;
}
// use standard WheelEvent:
// https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent
const supportMousewheel = inBrowser && 'onwheel' in window;
let mousewheelTimer = null;

export default createComponent({
  mixins: [TouchMixin],

  props: {
    valueKey: String,
    readonly: Boolean,
    allowHtml: Boolean,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    swipeDuration: [Number, String],
    visibleItemCount: [Number, String],
    initialOptions: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      offset: 0,
      duration: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex,
    };
  },

  created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },

  mounted() {
    this.bindTouchEvent(this.$el);
    if (supportMousewheel) {
      on(this.$el, 'wheel', this.onMouseWheel, false);
    }
  },

  destroyed() {
    const { children } = this.$parent;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }

    if (supportMousewheel) {
      off(this.$el, 'wheel');
    }
  },

  watch: {
    initialOptions: 'setOptions',

    defaultIndex(val) {
      this.setIndex(val);
    },
  },

  computed: {
    count() {
      return this.options.length;
    },

    baseOffset() {
      return (this.itemHeight * (this.visibleItemCount - 1)) / 2;
    },
  },

  methods: {
    setOptions(options) {
      if (JSON.stringify(options) !== JSON.stringify(this.options)) {
        this.options = deepClone(options);
        this.setIndex(this.defaultIndex);
      }
    },

    onTouchStart(event) {
      if (this.readonly) {
        return;
      }

      this.touchStart(event);

      if (this.moving) {
        const translateY = getElementTranslateY(this.$refs.wrapper);
        this.offset = Math.min(0, translateY - this.baseOffset);
        this.startOffset = this.offset;
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },

    onTouchMove(event) {
      if (this.readonly) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'vertical') {
        this.moving = true;
        preventDefault(event, true);
      }

      this.offset = range(
        this.startOffset + this.deltaY,
        -(this.count * this.itemHeight),
        this.itemHeight
      );

      const now = Date.now();
      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },

    onTouchEnd() {
      if (this.readonly) {
        return;
      }

      const distance = this.offset - this.momentumOffset;
      const duration = Date.now() - this.touchStartTime;
      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      const index = this.getIndexByOffset(this.offset);
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);

      // compatible with desktop scenario
      // use setTimeout to skip the click event Emitted after touchstart
      setTimeout(() => {
        this.moving = false;
      }, 0);
    },

    onMouseWheel(event) {
      if (this.readonly) {
        return;
      }
      preventDefault(event, true);
      // simply combine touchstart and touchmove
      const translateY = getElementTranslateY(this.$refs.wrapper);
      this.startOffset = Math.min(0, translateY - this.baseOffset);
      this.momentumOffset = this.startOffset;
      this.transitionEndTrigger = null;

      // directly use deltaY, see https://caniuse.com/?search=deltaY
      // use deltaY to detect direction for not special setting device
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
      const { deltaY } = event;
      if (this.startOffset === 0 && deltaY < 0) {
        return;
      }

      // get offset
      // if necessary, can adjust distance value to make scrolling smoother
      const distance = -deltaY;
      this.offset = range(
        this.startOffset + distance,
        -(this.count * this.itemHeight),
        this.itemHeight
      );

      if (mousewheelTimer) {
        clearTimeout(mousewheelTimer);
      }

      mousewheelTimer = setTimeout(() => {
        this.onTouchEnd();
        this.touchStartTime = 0;
      }, MOMENTUM_LIMIT_TIME);
    },

    onTransitionEnd() {
      this.stopMomentum();
    },

    onClickItem(index) {
      if (this.moving || this.readonly) {
        return;
      }

      this.transitionEndTrigger = null;
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },

    adjustIndex(index) {
      index = range(index, 0, this.count);

      for (let i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (let i = index - 1; i >= 0; i--) {
        if (!isOptionDisabled(this.options[i])) return i;
      }
    },

    getOptionText(option) {
      if (isObject(option) && this.valueKey in option) {
        return option[this.valueKey];
      }
      return option;
    },

    setIndex(index, emitChange) {
      index = this.adjustIndex(index) || 0;

      const offset = -index * this.itemHeight;

      const trigger = () => {
        if (index !== this.currentIndex) {
          this.currentIndex = index;

          if (emitChange) {
            this.$emit('change', index);
          }
        }
      };

      // trigger the change event after transitionend when moving
      if (this.moving && offset !== this.offset) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      this.offset = offset;
    },

    setValue(value) {
      const { options } = this;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },

    getValue() {
      return this.options[this.currentIndex];
    },

    getIndexByOffset(offset) {
      return range(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },

    momentum(distance, duration) {
      const speed = Math.abs(distance / duration);

      distance = this.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

      const index = this.getIndexByOffset(distance);

      this.duration = +this.swipeDuration;
      this.setIndex(index, true);
    },

    stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    },

    genOptions() {
      const optionStyle = {
        height: `${this.itemHeight}px`,
      };

      return this.options.map((option, index) => {
        const text = this.getOptionText(option);
        const disabled = isOptionDisabled(option);

        const data = {
          style: optionStyle,
          attrs: {
            role: 'button',
            tabindex: disabled ? -1 : 0,
          },
          class: [
            bem('item', {
              disabled,
              selected: index === this.currentIndex,
            }),
          ],
          on: {
            click: () => {
              this.onClickItem(index);
            },
          },
        };

        const childData = {
          class: 'van-ellipsis',
          domProps: {
            [this.allowHtml ? 'innerHTML' : 'textContent']: text,
          },
        };

        return (
          <li {...data}>
            {this.slots('option', option) || <div {...childData} />}
          </li>
        );
      });
    },
  },

  render() {
    const wrapperStyle = {
      transform: `translate3d(0, ${this.offset + this.baseOffset}px, 0)`,
      transitionDuration: `${this.duration}ms`,
      transitionProperty: this.duration ? 'all' : 'none',
    };

    return (
      <div class={[bem(), this.className]}>
        <ul
          ref="wrapper"
          style={wrapperStyle}
          class={bem('wrapper')}
          onTransitionend={this.onTransitionEnd}
        >
          {this.genOptions()}
        </ul>
      </div>
    );
  },
});
