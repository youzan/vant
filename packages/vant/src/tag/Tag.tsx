import { CSSProperties, PropType, Transition, defineComponent } from 'vue';
import { truthProp, createNamespace } from '../utils';
import { Icon } from '../icon';

const [name, bem] = createNamespace('tag');

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export default defineComponent({
  name,

  props: {
    size: String,
    mark: Boolean,
    show: truthProp,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean,
    type: {
      type: String as PropType<TagType>,
      default: 'default',
    },
  },

  emits: ['close'],

  setup(props, { slots, emit }) {
    const onClose = (event: MouseEvent) => {
      event.stopPropagation();
      emit('close', event);
    };

    const getStyle = (): CSSProperties => {
      if (props.plain) {
        return {
          color: props.textColor || props.color,
          borderColor: props.color,
        };
      }
      return {
        color: props.textColor,
        background: props.color,
      };
    };

    const renderTag = () => {
      const { type, mark, plain, round, size, closeable } = props;

      const classes: Record<string, unknown> = {
        mark,
        plain,
        round,
      };
      if (size) {
        classes[size] = size;
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
