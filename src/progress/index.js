import { ref, watch, computed, nextTick, reactive, onMounted } from 'vue';
import { createNamespace, isDef, addUnit } from '../utils';

const [createComponent, bem] = createNamespace('progress');

export default createComponent({
  props: {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    pivotColor: String,
    trackColor: String,
    strokeWidth: [Number, String],
    percentage: {
      type: [Number, String],
      required: true,
      validator: (value) => value >= 0 && value <= 100,
    },
    showPivot: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const rootRef = ref(null);
    const pivotRef = ref(null);

    const state = reactive({
      pivotWidth: 0,
      rootWidth: 0,
    });

    const background = computed(() =>
      props.inactive ? '#cacaca' : props.color
    );

    const setWidth = () => {
      nextTick(() => {
        state.pivotWidth = pivotRef.value ? pivotRef.value.offsetWidth : 0;
        state.rootWidth = rootRef.value.offsetWidth;
      });
    };

    const renderPivot = () => {
      const { rootWidth, pivotWidth } = state;
      const { textColor, pivotText, pivotColor, percentage } = props;
      const text = isDef(pivotText) ? pivotText : percentage + '%';
      const show = props.showPivot && text;

      if (show) {
        const left = ((rootWidth - pivotWidth) * percentage) / 100;
        const style = {
          color: textColor,
          left: `${left}px`,
          background: pivotColor || background.value,
        };

        return (
          <span ref={pivotRef} style={style} class={bem('pivot')}>
            {text}
          </span>
        );
      }
    };

    watch([() => props.showPivot, () => props.pivotText], setWidth);

    onMounted(setWidth);

    return () => {
      const { trackColor, percentage, strokeWidth } = props;
      const rootStyle = {
        background: trackColor,
        height: addUnit(strokeWidth),
      };
      const portionStyle = {
        background: background.value,
        width: (state.rootWidth * percentage) / 100 + 'px',
      };

      return (
        <div ref={rootRef} class={bem()} style={rootStyle}>
          <span class={bem('portion')} style={portionStyle}>
            {renderPivot()}
          </span>
        </div>
      );
    };
  },
});
