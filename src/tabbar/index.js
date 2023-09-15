import { createNamespace } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { callInterceptor } from '../utils/interceptor';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('tabbar');

export default createComponent({
  mixins: [ParentMixin('vanTabbar')],

  props: {
    route: Boolean,
    zIndex: [Number, String],
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    value: {
      type: [Number, String],
      default: 0,
    },
    border: {
      type: Boolean,
      default: true,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: null,
    },
  },

  data() {
    return {
      height: null,
    };
  },

  computed: {
    fit() {
      if (this.safeAreaInsetBottom !== null) {
        return this.safeAreaInsetBottom;
      }
      // enable safe-area-inset-bottom by default when fixed
      return this.fixed;
    },
  },

  watch: {
    value: 'setActiveItem',
    children: 'setActiveItem',
  },

  mounted() {
    if (this.placeholder && this.fixed) {
      const setHeight = () => {
        this.height = this.$refs.tabbar.getBoundingClientRect().height;
      };

      setHeight();
      // https://github.com/vant-ui/vant/issues/10131
      setTimeout(setHeight, 100);
    }
  },

  methods: {
    setActiveItem() {
      this.children.forEach((item, index) => {
        item.nameMatched = item.name === this.value || index === this.value;
      });
    },

    triggerChange(active, afterChange) {
      callInterceptor({
        interceptor: this.beforeChange,
        args: [active],
        done: () => {
          this.$emit('input', active);
          this.$emit('change', active);
          afterChange();
        },
      });
    },

    genTabbar() {
      return (
        <div
          ref="tabbar"
          style={{ zIndex: this.zIndex }}
          class={[
            { [BORDER_TOP_BOTTOM]: this.border },
            bem({
              unfit: !this.fit,
              fixed: this.fixed,
            }),
          ]}
        >
          {this.slots()}
        </div>
      );
    },
  },

  render() {
    if (this.placeholder && this.fixed) {
      return (
        <div class={bem('placeholder')} style={{ height: `${this.height}px` }}>
          {this.genTabbar()}
        </div>
      );
    }

    return this.genTabbar();
  },
});
