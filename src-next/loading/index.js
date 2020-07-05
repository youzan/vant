// Utils
import { createNamespace, addUnit } from '../utils';

const [createComponent, bem] = createNamespace('loading');

const SpinIcon = [];
for (let i = 0; i < 12; i++) {
  SpinIcon.push(<i />);
}

const CircularIcon = (
  <svg class={bem('circular')} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
);

export default createComponent({
  props: {
    color: String,
    size: [Number, String],
    vertical: Boolean,
    textSize: [Number, String],
    type: {
      type: String,
      default: 'circular',
    },
  },

  methods: {
    genLoadingText() {
      if (this.$slots.default) {
        const style = this.textSize && {
          fontSize: addUnit(this.textSize),
        };

        return (
          <span class={bem('text')} style={style}>
            {this.$slots.default()}
          </span>
        );
      }
    },
  },

  render() {
    const { color, size, type, vertical } = this;

    const style = { color };
    if (size) {
      const iconSize = addUnit(size);
      style.width = iconSize;
      style.height = iconSize;
    }

    return (
      <div class={bem([type, { vertical }])}>
        <span class={bem('spinner', type)} style={style}>
          {type === 'spinner' ? SpinIcon : CircularIcon}
        </span>
        {this.genLoadingText()}
      </div>
    );
  },
});
