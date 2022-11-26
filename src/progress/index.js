import { createNamespace, addUnit } from '../utils';
import { BindEventMixin } from '../mixins/bind-event';
import VanEmptyCol from '../emptycol';

const [createComponent, bem] = createNamespace('progress');

export default createComponent({
  mixins: [
    BindEventMixin(function (bind) {
      bind(window, 'resize', this.resize, true);
      bind(window, 'orientationchange', this.resize, true);
    }),
  ],

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
      validator: (value) => value >= 0 && value <= 100,
    },
    showPivot: {
      type: Boolean,
      default: true,
    },
    custom:{
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      pivotWidth: 0,
      customWidth:0,
      progressWidth: 0,
    };
  },

  mounted() {
    this.resize();
  },

  watch: {
    showPivot: 'resize',
    pivotText: 'resize',
  },
  computed: {
    inDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    }
  },

  methods: {
    // @exposed-api
    resize() {
      this.$nextTick(() => {
        this.progressWidth = this.$el.offsetWidth;
        this.pivotWidth = this.$refs.pivot ? this.$refs.pivot.offsetWidth : 0;
        this.customWidth  = this.$refs.custom ? this.$refs.custom.offsetWidth:0
      });
    },
  },

  render() {
    const { pivotText, percentage } = this;
    const text = pivotText ?? percentage + '%';
    const showPivot = this.showPivot && text;
    const background = this.inactive ? '#cacaca' : this.color;

    const pivotStyle = {
      color: this.textColor,
      left: `${((this.progressWidth - this.pivotWidth) * percentage) / 100}px`,
      background: this.pivotColor || background,
    };
    const customStyle = {
      left: `${((this.progressWidth - this.customWidth) * percentage) / 100}px`,
    }

    const portionStyle = {
      background,
      width: (this.progressWidth * percentage) / 100 + 'px',
    };

    const wrapperStyle = {
      background: this.trackColor,
      height: addUnit(this.strokeWidth),
    };

    return (
      <div class="van-progress-room">
        <div class={bem()} style={wrapperStyle}>
          <span class={bem('portion')} style={portionStyle}>
            {
              this.custom ? <div ref="custom" style={customStyle} vusion-slot-name="default" class="custom">
                {this.slots()?this.slots() : this.inDesigner&&< VanEmptyCol ></VanEmptyCol>}
              </div>:showPivot && (
              <span ref="pivot" style={pivotStyle} class={bem('pivot')}>
                {text}
              </span>
            )
            }
          </span>
        </div>
      </div>
    );
  },
});
