import { computed, PropType, defineComponent } from 'vue';
import { createNamespace, addUnit, getSizeStyle, extend } from '../utils';

const [name, bem] = createNamespace('loading');

const SpinIcon: JSX.Element[] = Array(12)
  .fill(null)
  .map((_, index) => <i class={bem('line', String(index + 1))} />);

const CircularIcon = (
  <svg class={bem('circular')} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
);

export type LoadingType = 'circular' | 'spinner';

export default defineComponent({
  name,

  props: {
    size: [Number, String],
    color: String,
    vertical: Boolean,
    textSize: [Number, String],
    textColor: String,
    type: {
      type: String as PropType<LoadingType>,
      default: 'circular',
    },
  },

  setup(props, { slots }) {
    const spinnerStyle = computed(() =>
      extend({ color: props.color }, getSizeStyle(props.size))
    );

    const renderText = () => {
      if (slots.default) {
        return (
          <span
            class={bem('text')}
            style={{
              fontSize: addUnit(props.textSize),
              color: props.textColor ?? props.color,
            }}
          >
            {slots.default()}
          </span>
        );
      }
    };

    return () => {
      const { type, vertical } = props;
      return (
        <div class={bem([type, { vertical }])}>
          <span class={bem('spinner', type)} style={spinnerStyle.value}>
            {type === 'spinner' ? SpinIcon : CircularIcon}
          </span>
          {renderText()}
        </div>
      );
    };
  },
});
