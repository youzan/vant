import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type TagType = 'default' | 'primary' | 'success' | 'danger';

export type TagSize = 'large' | 'medium';

export type TagProps = {
  size?: TagSize;
  type?: TagType;
  mark?: boolean;
  color?: string;
  plain?: boolean;
  round?: boolean;
  textColor?: string;
};

const [createComponent, bem] = createNamespace('tag');

function Tag(
  h: CreateElement,
  props: TagProps,
  slots: DefaultSlots,
  ctx: RenderContext<TagProps>
) {
  const { type, mark, plain, color, round, size } = props;

  const key = plain ? 'color' : 'backgroundColor';
  const style = { [key]: color };

  if (props.textColor) {
    style.color = props.textColor;
  }

  const classes: { [key: string]: any } = { mark, plain, round };
  if (size) {
    classes[size] = size;
  }

  return (
    <span
      style={style}
      class={[
        bem([classes, type]),
        {
          'van-hairline--surround': plain
        }
      ]}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
    </span>
  );
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  type: {
    type: String,
    default: 'default'
  }
};

export default createComponent<TagProps>(Tag);
