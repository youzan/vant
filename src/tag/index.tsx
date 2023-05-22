import _camelCase  from 'lodash/camelCase'

// Utils
import { createNamespace } from '../utils';
import { inherit, emit } from '../utils/functional';

// Components
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';
import VanEmptyCol from '../emptycol/index';

export type TagType = 'default' | 'primary' | 'success' | 'danger';

export type TagSize = 'large' | 'medium' | 'small';

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
    style.backgroundColor = color;
  }

  // 组件上写style，组件里不生效，这里需要合并style
  const vnodeStaticStyle: any = ctx.data && ctx.data.staticStyle || {};
  const vnodeStyle: any = ctx.data && ctx.data.style || {};

  // Object.assign(style, vnodeStaticStyle);
  // Object.assign(style, vnodeStyle);

  // fix background-color -> backgroundColor
  // issue: http://projectmanage.netease-official.lcap.163yun.com/dashboard/BugDetail?id=2612632479860224

  // eslint-disable-next-line no-restricted-syntax
  for (const key in vnodeStaticStyle) {
    if (Object.prototype.hasOwnProperty.call(vnodeStaticStyle, key)) {
      const value = vnodeStaticStyle[key];
      style[_camelCase(key)] = value;
    }
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key in vnodeStyle) {
    if (Object.prototype.hasOwnProperty.call(vnodeStyle, key)) {
      const value = vnodeStyle[key];
      style[_camelCase(key)] = value;
    }
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
  const designer = ctx.parent?.$env?.VUE_APP_DESIGNER;
  return (
    <transition name={props.closeable ? 'van-fade' : null}>
      <span
        key="content"
        style={style}
        class={bem([classes, type])}
        {...inherit(ctx, true)}
      >
        {slots.default?.()
          ? slots.default?.()
          : designer && <VanEmptyCol vusion-slot-name="default"></VanEmptyCol>}
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
