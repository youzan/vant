import { deepClone } from '../utils/deep-clone';
import { use, isObj, range } from '../utils';

const DEFAULT_DURATION = 200;
const [sfc, bem] = use('picker-column');

export default sfc({
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
      startY: 0,
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
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },

    onTouchMove(event) {
      event.preventDefault();
      const deltaY = event.touches[0].clientY - this.startY;
      this.offset = range(
        this.startOffset + deltaY,
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

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        userAction && this.$emit('change', index);
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
        <ul style={wrapperStyle}>
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
              onClick={() => {
                this.setIndex(index, true);
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
});
