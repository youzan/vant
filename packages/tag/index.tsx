import { use } from '../utils';
import { inherit } from '../utils/functional';
import { RED, BLUE, GREEN, GRAY_DARK } from '../utils/color';

// Types
import { FunctionalComponent } from '../utils/use/sfc';

const [sfc, bem] = use('tag');

const COLOR_MAP: { [key: string]: string } = {
  danger: RED,
  primary: BLUE,
  success: GREEN
};

const Tag: FunctionalComponent<TagProps> = function(h, props, slots, ctx) {
  const { type, mark, plain, round, size } = ctx.props;

  const color = props.color || (type && COLOR_MAP[type]) || GRAY_DARK;
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
        bem(classes),
        {
          'van-hairline--surround': plain
        }
      ]}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
    </span>
  );
};

export type TagProps = {
  size?: string;
  type?: string;
  mark?: boolean;
  color?: string;
  plain?: boolean;
  round?: boolean;
  textColor?: string;
};

Tag.props = {
  size: String,
  type: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String
};

export default sfc<TagProps>(Tag);
