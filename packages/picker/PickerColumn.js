import { deepClone } from '../utils/deep-clone';
import { use, isObj, range } from '../utils';
import { preventDefault } from '../utils/event';
import { TouchMixin } from '../mixins/touch';

const DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动，持续 `MOMENTUM_DURATION`
const MOMENTUM_DURATION = 1000;
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

const [sfc, bem] = use('picker-column');

function getElementTranslateY(element) {
  const { transform } = window.getComputedStyle(element);
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

  return Number(translateY);
}

function isOptionDisabled(option) {
  return isObj(option) && option.disabled;
}

export default sfc({
  mixins: [TouchMixin],

  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    initialOptions: Array,
    visibleItemCount: Number
  },

  data() {
    return {
      offset: 0,
      duration: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },

  created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },

  destroyed() {
    const { children } = this.$parent;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },

  watch: {
    defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },

  computed: {
    count() {
      return this.options.length;
    }
  },

  methods: {
    onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        const translateY = getElementTranslateY(this.$refs.wrapper);
        this.startOffset = Math.min(0, translateY);
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.moving = false;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },

    onTouchMove(event) {
      preventDefault(event);
      this.moving = true;
      this.touchMove(event);
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
      const distance = this.offset - this.momentumOffset;
      const duration = Date.now() - this.touchStartTime;
      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        const index = this.getIndexByOffset(this.offset);
        this.setIndex(index, true);
      }
    },

    onTransitionEnd() {
      this.stopMomentum();
    },

    onClickItem(index) {
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
      return isObj(option) && this.valueKey in option ? option[this.valueKey] : option;
    },

    setIndex(index, userAction) {
      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      const trigger = () => {
        if (index !== this.currentIndex) {
          this.currentIndex = index;

          if (userAction) {
            this.$emit('change', index);
          }
        }
      };

      // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件
      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
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
      return range(
        Math.round(-offset / this.itemHeight),
        0,
        this.count - 1
      );
    },

    momentum(distance, duration) {
      const speed = Math.abs(distance / duration);

      distance = this.offset + speed / 0.0015 * (distance < 0 ? -1 : 1);

      const index = this.getIndexByOffset(distance);

      this.duration = MOMENTUM_DURATION;
      this.setIndex(index, true);
    },

    stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    }
  },

  render(h) {
    const { itemHeight, visibleItemCount } = this;

    const baseOffset = (itemHeight * (visibleItemCount - 1)) / 2;

    const wrapperStyle = {
      transform: `translate3d(0, ${this.offset + baseOffset}px, 0)`,
      transitionDuration: `${this.duration}ms`,
      transitionProperty: this.duration ? 'transform' : 'none',
      lineHeight: `${itemHeight}px`
    };

    const optionStyle = {
      height: `${itemHeight}px`
    };

    return (
      <div
        class={[bem(), this.className]}
        onTouchstart={this.onTouchStart}
        onTouchmove={this.onTouchMove}
        onTouchend={this.onTouchEnd}
        onTouchcancel={this.onTouchEnd}
      >
        <ul
          ref="wrapper"
          style={wrapperStyle}
          class={bem('wrapper')}
          onTransitionend={this.onTransitionEnd}
        >
          {this.options.map((option, index) => (
            <li
              style={optionStyle}
              class={[
                'van-ellipsis',
                bem('item', { disabled: isOptionDisabled(option) })
              ]}
              domPropsInnerHTML={this.getOptionText(option)}
              onClick={() => {
                this.onClickItem(index);
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
});
