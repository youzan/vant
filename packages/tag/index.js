import { use } from '../utils';
import { RED, BLUE, GREEN, GRAY_DARK } from '../utils/color';

const [sfc, bem] = use('tag');

const COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
};

function Tag(h, props, slots, ctx) {
  const { mark, plain, round, size } = ctx.props;

  const color = props.color || COLOR_MAP[props.type] || GRAY_DARK;
  const key = plain ? 'color' : 'backgroundColor';
  const style = { [key]: color };

  if (props.textColor) {
    style.color = props.textColor;
  }

  return (
    <span
      style={style}
      class={[
        bem({ mark, plain, round, [size]: size }),
        {
          'van-hairline--surround': plain
        }
      ]}
      {...ctx.data}
    >
      {slots.default && slots.default()}
    </span>
  );
}

Tag.props = {
  size: String,
  type: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String
};

export default sfc(Tag);
