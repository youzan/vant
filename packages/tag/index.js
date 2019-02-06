import { use } from '../utils';
import { RED, BLUE, GREEN, GRAY_DARK } from '../utils/color';

const [sfc, bem] = use('tag');

const COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
};

export default sfc({
  functional: true,

  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },

  render(h, context) {
    const { props } = context;
    const { mark, plain, round, size } = context.props;

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
        {...context.data}
      >
        {context.children}
      </span>
    );
  }
});
