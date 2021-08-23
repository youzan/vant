import { computed, defineComponent, ExtractPropTypes } from 'vue';
import { truthProp, createNamespace, addUnit } from '../utils';

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
    const background = computed(() =>
      props.inactive ? '#cacaca' : props.color
    );

    const scaleX = computed(() => +props.percentage! / 100);
    const translateX = computed(() => {
      let offset = 0;
      if (+props.percentage! !== 0) {
        offset = (100 - +props.percentage!) / 2 / (+props.percentage! / 100);
      }
      return `${offset}%`;
    });

    const renderPivot = () => {
      const { textColor, pivotText, pivotColor, percentage } = props;
      const text = pivotText ?? `${percentage}%`;
      const show = props.showPivot && text;

      if (show) {
        const style = {
          color: textColor,
          left: `${+percentage!}%`,
          transform: `translate(-${+percentage!}%,-50%)`,
          background: pivotColor || background.value,
        };

        return (
          <span style={style} class={bem('pivot')}>
            {text}
          </span>
        );
      }
    };

    return () => {
      const { trackColor, strokeWidth } = props;
      const rootStyle = {
        background: trackColor,
        height: addUnit(strokeWidth),
      };
      const portionStyle = {
        background: background.value,
        width: '100%',
        transform: `scaleX(${scaleX.value}) translateX(-${translateX.value})`,
      };

      return (
        <div class={bem()} style={rootStyle}>
          <span class={bem('portion')} style={portionStyle}></span>
          {renderPivot()}
        </div>
      );
    };
  },
});
