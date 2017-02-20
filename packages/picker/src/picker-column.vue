<template>
  <div class="z-picker-column">
    <div class="z-picker-column-wrapper" :class="{ dragging: isDragging }" ref="wrapper" :style="{ height: visibleContentHeight + 'px' }">
      <div
        v-for="item in currentValues"
        class="z-picker-column__item"
        :class="{ 'z-picker-column__item--selected': item === currentValue }"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import translateUtil from 'src/utils/transition';
import draggable from './draggable';

const DEFAULT_ITEM_HEIGHT = 44;

export default {
  name: 'z-picker-column',

  props: {
    /**
     * 每一列可见备选元素的个数
     */
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    values: {
      type: Array,
      default() {
        return [];
      }
    },
    className: {},
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    value: {}
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
      this.currentValue = val;
    },

    currentValues(val) {
      if (this.valueIndex === -1) {
        this.currentValue = (val || [])[0];
      }
    },

    currentValue(val) {
      this.doOnValueChange();

      this.$emit('change', this);
      this.$emit('input', val);
    }
  },

  computed: {
    /**
     * picker可见备选元素总高度
     */
    visibleContentHeight() {
      return this.itemHeight * this.visibileColumnCount;
    },

    valueIndex() {
      return this.currentValues.indexOf(this.currentValue);
    },

    dragRange() {
      var values = this.currentValues;
      var visibileColumnCount = this.visibileColumnCount;
      var itemHeight = this.itemHeight;

      return [ -itemHeight * (values.length - Math.ceil(visibileColumnCount / 2)), itemHeight * Math.floor(visibileColumnCount / 2) ];
    }
  },

  mounted() {
    this.ready = true;
    this.$emit('input', this.currentValue);

    this.initEvents();
    this.doOnValueChange();
  },

  methods: {
    value2Translate(value) {
      let values = this.currentValues;
      let valueIndex = values.indexOf(value);
      let offset = Math.floor(this.visibileColumnCount / 2);
      let itemHeight = this.itemHeight;

      if (valueIndex !== -1) {
        return (valueIndex - offset) * -itemHeight;
      }
    },

    translate2Value(translate) {
      let itemHeight = this.itemHeight;
      translate = Math.round(translate / itemHeight) * itemHeight;

      let index = -(translate - Math.floor(this.visibileColumnCount / 2) * itemHeight) / itemHeight;

      return this.currentValues[index];
    },

    initEvents() {
      var el = this.$refs.wrapper;
      var dragState = {};

      var velocityTranslate, prevTranslate, pickerItems;

      draggable(el, {
        start: (event) => {
          dragState = {
            range: this.dragRange,
            start: new Date(),
            startLeft: event.pageX,
            startTop: event.pageY,
            startTranslateTop: translateUtil.getElementTranslate(el).top
          };
          pickerItems = el.querySelectorAll('.z-picker-item');
        },

        drag: (event) => {
          this.isDragging = true;

          dragState.left = event.pageX;
          dragState.top = event.pageY;

          let deltaY = dragState.top - dragState.startTop;
          let translate = dragState.startTranslateTop + deltaY;

          translateUtil.translateElement(el, null, translate);

          velocityTranslate = translate - prevTranslate || translate;

          prevTranslate = translate;
        },

        end: () => {
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

    doOnValueChange() {
      let value = this.currentValue;
      let wrapper = this.$refs.wrapper;

      translateUtil.translateElement(wrapper, null, this.value2Translate(value));
    }
  }
};
</script>
