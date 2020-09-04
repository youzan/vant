import { computed } from 'vue';
import { createNamespace, addUnit, getSizeStyle } from '../utils';

const [createComponent, bem] = createNamespace('loading');

const SpinIcon = [];
for (let i = 0; i < 12; i++) {
  SpinIcon.push(<i />);
}

const CircularIcon = (
  <svg class={bem('circular')} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
);

export default createComponent({
  props: {
    size: [Number, String],
    color: String,
    vertical: Boolean,
    textSize: [Number, String],
    type: {
      type: String,
      default: 'circular',
    },
  },

  setup(props, { slots }) {
    const spinnerStyle = computed(() => ({
      color: props.color,
      ...getSizeStyle(props.size),
    }));

    const renderText = () => {
      if (slots.default) {
        return (
          <span
            class={bem('text')}
            style={{
              fontSize: addUnit(props.textSize),
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
