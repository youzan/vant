<template>
  <div class="van-picker-column" :class="classNames">
    <div class="van-picker-column-wrapper" :class="{ dragging: isDragging }" ref="wrapper" :style="{ height: visibleContentHeight + 'px' }">
      <div
        v-for="(item, index) in currentValues"
        :key="index"
        class="van-picker-column__item"
        :class="{ 'van-picker-column__item--selected': item === currentValue }"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }">
        {{ typeof item === 'object' && item[valueKey] ? item[valueKey] : item }}
      </div>
    </div>
  </div>
</template>

<script>
import translateUtil from '../utils/transition';
import draggable from './draggable';

const DEFAULT_ITEM_HEIGHT = 44;

export default {
  name: 'van-picker-column',

  props: {
    /**
     * 每一列可见备选元素的个数
     */
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    /**
     * 该列所有的可选值
     */
    values: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 每列添加额外的`className`
     */
    className: {
      type: String,
      default: ''
    },
    /**
     * 行高
     */
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    value: {},
    valueKey: String
  },

  data() {
    return {
      currentValue: this.value,
      currentValues: this.values,
      isDragging: false
    };
  },

  watch: {
    values(val) {
      this.currentValues = val;
    },
    currentValues(val) {
      /* istanbul ignore else */
      if (this.valueIndex === -1) {
        this.currentValue = (val || [])[0];
      }
    },
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.doOnValueChange();

      this.$emit('input', val);
      this.$emit('columnChange', this);
    }
  },

  computed: {
    /**
     * picker可见备选元素总高度
     */
    visibleContentHeight() {
      return this.itemHeight * this.visibileColumnCount;
    },

    /**
     * 当前选中值在`values`中的索引
     */
    valueIndex() {
      return this.currentValues.indexOf(this.currentValue);
    },

    /**
     * 计算picker的拖动范围
     */
    dragRange() {
      var values = this.currentValues;
      var visibileColumnCount = this.visibileColumnCount;
      var itemHeight = this.itemHeight;

      return [-itemHeight * (values.length - Math.ceil(visibileColumnCount / 2)), itemHeight * Math.floor(visibileColumnCount / 2)];
    },

    /**
     * 计算`classNames`
     */
    classNames() {
      return this.className.split(' ');
    }
  },

  mounted() {
    this.initEvents();
    this.doOnValueChange();
  },

  methods: {
    /**
     * 将当前`value`值转换成需要垂直方向需要`translate`的值
     */
    value2Translate(value) {
      const values = this.currentValues;
      const valueIndex = values.indexOf(value);
      const offset = Math.floor(this.visibileColumnCount / 2);
      const itemHeight = this.itemHeight;

      if (valueIndex !== -1) {
        return (valueIndex - offset) * (-itemHeight);
      }
    },

    /**
     * 根据当前`translate`的值转换成当前选中的`value`
     */
    translate2Value(translate) {
      const itemHeight = this.itemHeight;
      translate = Math.round(translate / itemHeight) * itemHeight;

      const index = -(translate - Math.floor(this.visibileColumnCount / 2) * itemHeight) / itemHeight;

      return this.currentValues[index];
    },

    /**
     * 初始化拖动事件
     */
    initEvents() {
      var el = this.$refs.wrapper;
      var dragState = {};

      var velocityTranslate;
      var prevTranslate;
      var pickerItems; // eslint-disable-line

      draggable(el, {
        start: (event) => {
          // 存储当前状态
          dragState = {
            range: this.dragRange,
            start: new Date(),
            startLeft: event.pageX,
            startTop: event.pageY,
            startTranslateTop: translateUtil.getElementTranslate(el).top
          };

          pickerItems = el.querySelectorAll('.van-picker-item'); // eslint-disable-line
        },

        drag: (event) => {
          this.isDragging = true;

          dragState.left = event.pageX;
          dragState.top = event.pageY;

          const deltaY = dragState.top - dragState.startTop;
          const translate = dragState.startTranslateTop + deltaY;

          translateUtil.translateElement(el, null, translate);

          velocityTranslate = translate - prevTranslate || translate;

          prevTranslate = translate;
        },

        end: () => {
          /* istanbul ignore else */
          if (this.isDragging) {
            this.isDragging = false;

            var momentumRatio = 7;
            var currentTranslate = translateUtil.getElementTranslate(el).top;
            var duration = new Date() - dragState.start;

            var momentumTranslate;
            if (duration < 300) {
              momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
            }

            var dragRange = dragState.range;

            this.$nextTick(() => {
              var translate;
              var itemHeight = this.itemHeight;

              if (momentumTranslate) {
                translate = Math.round(momentumTranslate / itemHeight) * itemHeight;
              } else {
                translate = Math.round(currentTranslate / itemHeight) * itemHeight;
              }

              translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);

              translateUtil.translateElement(el, null, translate);

              this.currentValue = this.translate2Value(translate);
            });
          }

          dragState = {};
        }
      });
    },

    /**
     * `value`改变时调用
     */
    doOnValueChange() {
      const value = this.currentValue;
      const wrapper = this.$refs.wrapper;

      translateUtil.translateElement(wrapper, null, this.value2Translate(value));
    }
  }
};
</script>
