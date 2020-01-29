import { createNamespace, isDef, addUnit } from '../utils';

const [createComponent, bem] = createNamespace('progress');

export default createComponent({
  props: {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    pivotColor: String,
    trackColor: String,
    strokeWidth: [Number, String],
    percentage: {
      type: [Number, String],
      required: true,
      validator: value => value >= 0 && value <= 100,
    },
    showPivot: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      pivotWidth: 0,
      progressWidth: 0,
    };
  },

  mounted() {
    this.setWidth();
  },

  watch: {
    showPivot: 'setWidth',
    pivotText: 'setWidth',
  },

  methods: {
    setWidth() {
      this.$nextTick(() => {
        this.progressWidth = this.$el.offsetWidth;
        this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0;
      });
    },
  },

  render() {
    const { pivotText, percentage } = this;
    const text = isDef(pivotText) ? pivotText : percentage + '%';
    const showPivot = this.showPivot && text;
    const background = this.inactive ? '#cacaca' : this.color;

    const pivotStyle = {
      color: this.textColor,
      left: `${((this.progressWidth - this.pivotWidth) * percentage) / 100}px`,
      background: this.pivotColor || background,
    };

    const portionStyle = {
      background,
      width: (this.progressWidth * percentage) / 100 + 'px',
    };

    const wrapperStyle = {
      background: this.trackColor,
      height: addUnit(this.strokeWidth),
    };

    return (
      <div class={bem()} style={wrapperStyle}>
        <span class={bem('portion')} style={portionStyle}>
          {showPivot && (
            <span ref="pivot" style={pivotStyle} class={bem('pivot')}>
              {text}
            </span>
          )}
        </span>
      </div>
    );
  },
});
