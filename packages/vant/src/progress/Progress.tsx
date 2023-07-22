import { computed, defineComponent, type ExtractPropTypes } from 'vue';
import {
  addUnit,
  truthProp,
  numericProp,
  createNamespace,
  type Numeric,
} from '../utils';

const [name, bem] = createNamespace('progress');

export const progressProps = {
  color: String,
  inactive: Boolean,
  pivotText: String,
  textColor: String,
  showPivot: truthProp,
  pivotColor: String,
  trackColor: String,
  strokeWidth: numericProp,
  percentage: {
    type: numericProp,
    default: 0,
    validator: (value: Numeric) => +value >= 0 && +value <= 100,
  },
};

export type ProgressProps = ExtractPropTypes<typeof progressProps>;

export default defineComponent({
  name,

  props: progressProps,

  setup(props) {
    const background = computed(() =>
      props.inactive ? undefined : props.color,
    );

    const renderPivot = () => {
      const { textColor, pivotText, pivotColor, percentage } = props;
      const text = pivotText ?? `${percentage}%`;

      if (props.showPivot && text) {
        const style = {
          color: textColor,
          left: `${+percentage}%`,
          transform: `translate(-${+percentage}%,-50%)`,
          background: pivotColor || background.value,
        };

        return (
          <span
            style={style}
            class={bem('pivot', { inactive: props.inactive })}
          >
            {text}
          </span>
        );
      }
    };

    return () => {
      const { trackColor, percentage, strokeWidth } = props;
      const rootStyle = {
        background: trackColor,
        height: addUnit(strokeWidth),
      };
      const portionStyle = {
        width: `${percentage}%`,
        background: background.value,
      };

      return (
        <div class={bem()} style={rootStyle}>
          <span
            class={bem('portion', { inactive: props.inactive })}
            style={portionStyle}
          />
          {renderPivot()}
        </div>
      );
    };
  },
});
