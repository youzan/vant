import { deepClone } from '../utils/deep-clone';
import { use, isObj, range } from '../utils';
import { preventDefault } from '../utils/event';
import { TouchMixin } from '../mixins/touch';

const DEFAULT_DURATION = 200;
const [sfc, bem] = use('picker-column');

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
      startOffset: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },

  created() {
    this.$parent.children && this.$parent.children.push(this);
    this.setIndex(this.currentIndex);
  },

  destroyed() {
    const { children } = this.$parent;
    children && children.splice(children.indexOf(this), 1);
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
      this.startOffset = this.offset;
      this.duration = 0;
      this.hasTouchMove = false;
      this.transitionEndTrigger = null;
    },

    onTouchMove(event) {
      preventDefault(event);
      this.hasTouchMove = true;
      this.touchMove(event);
      this.offset = range(
        this.startOffset + this.deltaY,
        -(this.count * this.itemHeight),
        this.itemHeight
      );
    },

    onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        const index = range(Math.round(-this.offset / this.itemHeight), 0, this.count - 1);
        this.setIndex(index, true);
      }
      this.hasTouchMove = false;
    },

    onTransitionEnd() {
      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    },

    onClickItem(e) {
      const index = Number(e.currentTarget.getAttribute('data-index'));
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },

    adjustIndex(index) {
      index = range(index, 0, this.count);
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.options[i])) return i;
      }
    },

    isDisabled(option) {
      return isObj(option) && option.disabled;
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
          userAction && this.$emit('change', index);
        }
      };

      // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件
      if (this.hasTouchMove) {
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
    }
  },

  render(h) {
    const { itemHeight, visibleItemCount } = this;

    const columnStyle = {
      height: itemHeight * visibleItemCount + 'px'
    };

    const baseOffset = (itemHeight * (visibleItemCount - 1)) / 2;

    const wrapperStyle = {
      transition: `${this.duration}ms`,
      transform: `translate3d(0, ${this.offset + baseOffset}px, 0)`,
      lineHeight: `${itemHeight}px`
    };

    const optionStyle = {
      height: `${itemHeight}px`
    };

    return (
      <div
        style={columnStyle}
        class={[bem(), this.className]}
        onTouchstart={this.onTouchStart}
        onTouchmove={this.onTouchMove}
        onTouchend={this.onTouchEnd}
        onTouchcancel={this.onTouchEnd}
      >
        <ul
          style={wrapperStyle}
          onTransitionend={this.onTransitionEnd}
        >
          {this.options.map((option, index) => (
            <li
              style={optionStyle}
              class={[
                'van-ellipsis',
                bem('item', {
                  disabled: this.isDisabled(option),
                  selected: index === this.currentIndex
                })
              ]}
              domPropsInnerHTML={this.getOptionText(option)}
              data-index={index}
              onClick={this.onClickItem}
            />
          ))}
        </ul>
      </div>
    );
  }
});
