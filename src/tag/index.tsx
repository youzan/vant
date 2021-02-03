import { PropType, Transition } from 'vue';
import { createNamespace } from '../utils';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('tag');

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger';

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
      type: String as PropType<TagType>,
      default: 'default',
    },
    show: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['close'],

  setup(props, { slots, emit }) {
    const onClose = (event: MouseEvent) => {
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

    const renderTag = () => {
      const { type, mark, plain, round, size, closeable } = props;

      const classes: Record<string, boolean> = { mark, plain, round };
      if (size) {
        classes[size] = !!size;
      }

      const CloseIcon = closeable && (
        <Icon name="cross" class={bem('close')} onClick={onClose} />
      );

      return (
        <span style={getStyle()} class={bem([classes, type])}>
          {slots.default?.()}
          {CloseIcon}
        </span>
      );
    };

    return () => (
      <Transition name={props.closeable ? 'van-fade' : undefined}>
        {props.show ? renderTag() : null}
      </Transition>
    );
  },
});
