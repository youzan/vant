import { createNamespace, addUnit } from '../utils';
import { useLinkField } from '../composition/use-link-field';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('switch');

export default createComponent({
  props: {
    size: [Number, String],
    loading: Boolean,
    disabled: Boolean,
    modelValue: null as any,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: null as any,
      default: true,
    },
    inactiveValue: {
      type: null as any,
      default: false,
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit }) {
    const isChecked = () => props.modelValue === props.activeValue;

    const onClick = () => {
      if (!props.disabled && !props.loading) {
        const newValue = isChecked() ? props.inactiveValue : props.activeValue;
        emit('update:modelValue', newValue);
        emit('change', newValue);
      }
    };

    const renderLoading = () => {
      if (props.loading) {
        const color = isChecked() ? props.activeColor : props.inactiveColor;
        return <Loading class={bem('loading')} color={color} />;
      }
    };

    useLinkField(() => props.modelValue);

    return () => {
      const { size, loading, disabled, activeColor, inactiveColor } = props;
      const checked = isChecked();
      const style = {
        fontSize: addUnit(size),
        backgroundColor: checked ? activeColor : inactiveColor,
      };

      return (
        <div
          role="switch"
          class={bem({
            on: checked,
            loading,
            disabled,
          })}
          style={style}
          aria-checked={checked}
          onClick={onClick}
        >
          <div class={bem('node')}>{renderLoading()}</div>
        </div>
      );
    };
  },
});
