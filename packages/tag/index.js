import { use } from '../utils';
import { RED, BLUE, GREEN, GRAY_DARK } from '../utils/color';

const [sfc, bem] = use('tag');

const COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
};

export default sfc({
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },

  computed: {
    style() {
      const color = this.color || COLOR_MAP[this.type] || GRAY_DARK;
      const key = this.plain ? 'color' : 'backgroundColor';
      const style = { [key]: color };

      if (this.textColor) {
        style.color = this.textColor;
      }

      return style;
    }
  },

  render(h) {
    const {
      mark,
      plain,
      round,
      size
    } = this;

    return (
      <span
        class={[
          bem({ mark, plain, round, [size]: size }),
          {
            'van-hairline--surround': plain
          }
        ]}
        style={this.style}
      >
        {this.$slots.default}
      </span>
    );
  }
});
