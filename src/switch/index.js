// Utils
import { createNamespace, addUnit } from '../utils';
import { switchProps } from './shared';

// Mixins
import { FieldMixin } from '../mixins/field';

// Components
import Loading from '../loading';

const [createComponent, bem] = createNamespace('switch');

export default createComponent({
  mixins: [FieldMixin],

  props: switchProps,

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
          aria-checked={String(checked)}
          onClick={onClick}
        >
          <div class={bem('node')}>{renderLoading()}</div>
        </div>
      );
    };
  },
});
