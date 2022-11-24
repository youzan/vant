import { createNamespace, addUnit } from '../utils';
import { deepClone } from '../utils/deep-clone';
import { preventDefault } from '../utils/dom/event';
import { range, addNumber } from '../utils/format/number';
import { TouchMixin } from '../mixins/touch';
import { FieldMixin } from '../mixins/field';
import VanEmptyCol from '../emptycol/index';

const [createComponent, bem] = createNamespace('slider');

const isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);

export default createComponent({
  mixins: [TouchMixin, FieldMixin],

  props: {
    disabled: Boolean,
    vertical: Boolean,
    range: Boolean,
    barHeight: [Number, String],
    buttonSize: [Number, String],
    activeColor: String,
    inactiveColor: String,
    custom:Boolean,
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    value: {
      type: [Number, Array],
      default: 0,
    },
  },

  data() {
    return {
      dragStatus: '',
      currentData: 0,
    };
  },

  computed: {
    scope() {
      return this.max - this.min;
    },
    inDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    },
    buttonStyle() {
      if (this.buttonSize) {
        const size = addUnit(this.buttonSize);
        return {
          width: size,
          height: size,
        };
      }
    },
  },

  created() {
    if (typeof this.value ==="string"&&this.value.indexOf("{") !== -1) {
      this.updateValue(0);
    } else {
      this.updateValue(this.value);
    }
  },

  mounted() {
    if (this.range) {
      this.bindTouchEvent(this.$refs.wrapper0);
      this.bindTouchEvent(this.$refs.wrapper1);
    } else {
      this.bindTouchEvent(this.$refs.wrapper);
    }
  },
  watch: {
    range (value) {
      if (value) {
        this.currentData =  Array.isArray(this.value)?this.value  : [0, 100]
        this.updateValue(this.currentData);
      } else {
        this.currentData = this.value || 0
        this.updateValue(this.currentData);
      }
    },
    value(value) {
      this.currentData = value
    }
  },

  methods: {
    onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.touchStart(event);
      this.currentValue = this.currentData;
      if (this.range) {
        this.startValue = this.currentData.map(this.format);
      } else {
        this.startValue = this.format(this.currentData);
      }
      this.dragStatus = 'start';
    },

    onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'start') {
        this.$emit('drag-start');
      }

      preventDefault(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';

      const rect = this.$el.getBoundingClientRect();
      const delta = this.vertical ? this.deltaY : this.deltaX;
      const total = this.vertical ? rect.height : rect.width;
      const diff = (delta / total) * this.scope;

      if (this.range) {
        this.currentValue[this.index] = this.startValue[this.index] + diff;
      } else {
        this.currentValue = this.startValue + diff;
      }
      this.updateValue(this.currentValue);
    },

    onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'draging') {
        this.updateValue(this.currentValue, true);
        this.$emit('drag-end');
      }

      this.dragStatus = '';
    },

    onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;

      const rect = this.$el.getBoundingClientRect();
      const delta = this.vertical
        ? event.clientY - rect.top
        : event.clientX - rect.left;
      const total = this.vertical ? rect.height : rect.width;
      let value = +this.min + (delta / total) * this.scope;
      if (this.range) {
        let [left, right] = this.currentData;
        const middle = (left + right) / 2;
        if (value <= middle) {
          left = value;
        } else {
          right = value;
        }
        value = [left, right];
      }

      this.startValue = this.currentData;
      this.updateValue(value, true);
    },

    // 处理两个滑块重叠之后的情况
    handleOverlap(value) {
      if (value[0] > value[1]) {
        value = deepClone(value);
        return value.reverse();
      }
      return value;
    },

    updateValue(value, end) {
      if (this.range) {
        const _value =  Array.isArray(value)?value:[0,100]
        value = this.handleOverlap(_value).map(this.format);
      } else {
        value = this.format(value);
      }

      if (!isSameValue(value, this.currentData)) {
        this.$emit("update:value",value)
        this.$emit('input', value);
        this.currentData = value
      }

      if (end && !isSameValue(value, this.startValue)) {
        this.$emit('update:value', value);
        this.$emit('change', value);
        this.currentData = value
      }
    },

    format(value) {
      const min = +this.min;
      const max = +this.max;
      const step = +this.step;

      value = range(value, min, max);
      const diff = Math.round((value - min) / step) * step;
      return addNumber(min, diff);
    },
  },

  render() {
    const { vertical } = this;
    const mainAxis = vertical ? 'height' : 'width';
    const crossAxis = vertical ? 'width' : 'height';

    const wrapperStyle = {
      background: this.inactiveColor,
      [crossAxis]: addUnit(this.barHeight),
    };

    // 计算选中条的长度百分比
    const calcMainAxis = () => {
      const { currentData: value, min, range, scope } = this;
      if (range) {
        return `${((value[1] - value[0]) * 100) / scope}%`;
      }
      return `${((value - min) * 100) / scope}%`;
    };

    // 计算选中条的开始位置的偏移量
    const calcOffset = () => {
      const { currentData: value, min, range, scope } = this;
      if (range) {
        return `${((value[0] - min) * 100) / scope}%`;
      }
      return null;
    };

    const barStyle = {
      [mainAxis]: calcMainAxis(),
      left: this.vertical ? null : calcOffset(),
      top: this.vertical ? calcOffset() : null,
      background: this.activeColor,
    };

    if (this.dragStatus) {
      barStyle.transition = 'none';
    }

    const renderButton = (i) => {
      const map = ['left', 'right'];
      const isNumber = typeof i === 'number';
      const current = isNumber ? this.currentData[i] : this.currentData;

      const getClassName = () => {
        if (isNumber) {
          return `button-wrapper-${map[i]}`;
        }
        return `button-wrapper`;
      };

      const getRefName = () => {
        if (isNumber) {
          return `wrapper${i}`;
        }
        return `wrapper`;
      };

      const renderButtonContent = () => {
        const defaultButton =this.inDesigner ? <VanEmptyCol></VanEmptyCol>:<div class={bem('button')} style={this.buttonStyle} />
        if (isNumber) {
          const slotName = i === 0 ? 'left-button' : 'right-button'
          const slot = this.slots(i === 0 ? 'left-button' : 'right-button', {
            value: current,
          });
          if (this.custom) {
            return <div vusion-slot-name={slotName} >{slot || defaultButton} </div>
          }
        }

        // if (this.slots('button')) {
        //   // this.slots("button")
        //   return  this.custom &&
        // }

        if (this.custom) {
          return <div vusion-slot-name="button">{this.slots("button") ? this.slots("button") : defaultButton}</div>;
        }

        return <div class={bem('button')} style={this.buttonStyle} />;
      };

      return (
        <div
          ref={getRefName()}
          role="slider"
          tabindex={this.disabled ? -1 : 0}
          aria-valuemin={this.min}
          aria-valuenow={this.currentData}
          aria-valuemax={this.max}
          aria-orientation={this.vertical ? 'vertical' : 'horizontal'}
          class={bem(getClassName())}
          onTouchstart={() => {
            if (isNumber) {
              // 保存当前按钮的索引
              this.index = i;
            }
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {renderButtonContent()}
        </div>
      );
    };

    return (
      <div class="van-slider-room">
        <div
          style={wrapperStyle}
          class={bem({ disabled: this.disabled, vertical })}
          onClick={this.onClick}
        >
          <div class={bem('bar')} style={barStyle}>
            {this.range ? [renderButton(0), renderButton(1)] : renderButton()}
          </div>
          </div>
      </div>
    );
  },
});
