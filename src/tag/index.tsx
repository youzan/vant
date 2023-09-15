// Utils
import { createNamespace } from '../utils';
import { inherit, emit } from '../utils/functional';

// Components
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type TagType = 'default' | 'primary' | 'success' | 'danger';

export type TagSize = 'large' | 'medium';

export type TagProps = {
  type: TagType;
  size?: TagSize;
  mark?: boolean;
  color?: string;
  plain?: boolean;
  round?: boolean;
  textColor?: string;
  closeable?: boolean;
};

const [createComponent, bem] = createNamespace('tag');

function Tag(
  h: CreateElement,
  props: TagProps,
  slots: DefaultSlots,
  ctx: RenderContext<TagProps>
) {
  const { type, mark, plain, color, round, size, textColor } = props;

  const key = plain ? 'color' : 'backgroundColor';
  const style = { [key]: color };

  if (plain) {
    style.color = textColor || color;
    style.borderColor = color;
  } else {
    style.color = textColor;
    style.background = color;
  }

  const classes: { [key: string]: any } = { mark, plain, round };
  if (size) {
    classes[size] = size;
  }

  const CloseIcon = props.closeable && (
    <Icon
      name="cross"
      class={bem('close')}
      onClick={(event: PointerEvent) => {
        event.stopPropagation();
        emit(ctx, 'close');
      }}
    />
  );

  return (
    <transition name={props.closeable ? 'van-fade' : null}>
      <span
        key="content"
        style={style}
        class={bem([classes, type])}
        {...inherit(ctx, true)}
      >
        {slots.default?.()}
        {CloseIcon}
      </span>
    </transition>
  );
}

Tag.props = {
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
};

export default createComponent<TagProps>(Tag);
