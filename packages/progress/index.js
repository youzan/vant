import { use, isDef } from '../utils';
import { BLUE, WHITE } from '../utils/color';

const [sfc, bem] = use('progress');

export default sfc({
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: BLUE
    },
    textColor: {
      type: String,
      default: WHITE
    }
  },

  data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },

  mounted() {
    this.getWidth();
  },

  watch: {
    showPivot() {
      this.getWidth();
    },

    pivotText() {
      this.getWidth();
    }
  },

  methods: {
    getWidth() {
      this.progressWidth = this.$el.offsetWidth;
      this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0;
    }
  },

  render(h) {
    const { pivotText, percentage } = this;
    const text = isDef(pivotText) ? pivotText : percentage + '%';
    const showPivot = this.showPivot && text;
    const background = this.inactive ? '#cacaca' : this.color;

    const pivotStyle = {
      color: this.textColor,
      background: this.pivotColor || background
    };

    const portionStyle = {
      background,
      width: ((this.progressWidth - this.pivotWidth) * percentage) / 100 + 'px'
    };

    return (
      <div class={bem()}>
        <span class={bem('portion', { 'with-pivot': showPivot })} style={portionStyle}>
          {showPivot && (
            <span ref="pivot" style={pivotStyle} class={bem('pivot')}>
              {text}
            </span>
          )}
        </span>
      </div>
    );
  }
});
