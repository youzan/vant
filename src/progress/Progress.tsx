import {
  ref,
  watch,
  computed,
  nextTick,
  reactive,
  onMounted,
  defineComponent,
  ExtractPropTypes,
} from 'vue';
import { truthProp, createNamespace, addUnit } from '../utils';
import { useExpose } from '../composables/use-expose';

const [name, bem] = createNamespace('progress');

const props = {
  color: String,
  inactive: Boolean,
  pivotText: String,
  textColor: String,
  showPivot: truthProp,
  pivotColor: String,
  trackColor: String,
  strokeWidth: [Number, String],
  percentage: {
    type: [Number, String],
    validator: (value: number | string) => value >= 0 && value <= 100,
  },
};

export type ProgressProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

  setup(props) {
    const root = ref<HTMLElement>();
    const pivotRef = ref<HTMLElement>();

    const state = reactive({
      rootWidth: 0,
      pivotWidth: 0,
    });

    const background = computed(() =>
      props.inactive ? '#cacaca' : props.color
    );

    const resize = () => {
      nextTick(() => {
        state.rootWidth = root.value ? root.value.offsetWidth : 0;
        state.pivotWidth = pivotRef.value ? pivotRef.value.offsetWidth : 0;
      });
    };

    const renderPivot = () => {
      const { rootWidth, pivotWidth } = state;
      const { textColor, pivotText, pivotColor, percentage } = props;
      const text = pivotText ?? `${percentage}%`;
      const show = props.showPivot && text;

      if (show) {
        const left = ((rootWidth - pivotWidth) * +percentage!) / 100;
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

    watch(() => [props.showPivot, props.pivotText], resize);
    onMounted(resize);
    useExpose({ resize });

    return () => {
      const { trackColor, percentage, strokeWidth } = props;
      const rootStyle = {
        background: trackColor,
        height: addUnit(strokeWidth),
      };
      const portionStyle = {
        background: background.value,
        width: (state.rootWidth * +percentage!) / 100 + 'px',
      };

      return (
        <div ref={root} class={bem()} style={rootStyle}>
          <span class={bem('portion')} style={portionStyle}>
            {renderPivot()}
          </span>
        </div>
      );
    };
  },
});
