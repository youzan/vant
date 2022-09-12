import {
  Transition,
  defineComponent,
  type PropType,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';
import {
  truthProp,
  makeStringProp,
  createNamespace,
  HAPTICS_FEEDBACK,
} from '../utils';
import { Icon } from '../icon';
import type { TagType, TagSize } from './types';

const [name, bem] = createNamespace('tag');

export const tagProps = {
  size: String as PropType<TagSize>,
  mark: Boolean,
  show: truthProp,
  type: makeStringProp<TagType>('default'),
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  closeable: Boolean,
};

export type TagProps = ExtractPropTypes<typeof tagProps>;

export default defineComponent({
  name,

  props: tagProps,

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
        <Icon
          name="cross"
          class={[bem('close'), HAPTICS_FEEDBACK]}
          onClick={onClose}
        />
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
