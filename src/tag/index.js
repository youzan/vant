import { Transition } from 'vue';
import { createNamespace } from '../utils';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('tag');

export default createComponent({
  props: {
    size: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean,
    type: {
      type: String,
      default: 'default',
    },
    show: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['close'],

  setup(props, { slots, emit }) {
    const onClose = (event) => {
      event.stopPropagation();
      emit('close');
    };

    const getStyle = () => {
      if (props.plain) {
        return {
          color: props.textColor || props.color,
        };
      }
      return {
        color: props.textColor,
        background: props.color,
      };
    };

    return () => {
      const { show, type, mark, plain, round, size, closeable } = props;

      const classes = { mark, plain, round };
      if (size) {
        classes[size] = size;
      }

      const CloseIcon = closeable && (
        <Icon name="cross" class={bem('close')} onClick={onClose} />
      );

      return (
        <Transition name={closeable ? 'van-fade' : undefined}>
          {show ? (
            <span style={getStyle()} class={bem([classes, type])}>
              {slots.default?.()}
              {CloseIcon}
            </span>
          ) : null}
        </Transition>
      );
    };
  },
});
