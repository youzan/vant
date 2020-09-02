import { computed, Transition } from 'vue';
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

    const style = computed(() => {
      const key = props.plain ? 'color' : 'backgroundColor';
      const style = { [key]: props.color };

      if (props.textColor) {
        style.color = props.textColor;
      }

      return style;
    });

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
        <Transition name={closeable ? 'van-fade' : null}>
          {show ? (
            <span
              key="content"
              style={style.value}
              class={bem([classes, type])}
            >
              {slots.default?.()}
              {CloseIcon}
            </span>
          ) : null}
        </Transition>
      );
    };
  },
});
