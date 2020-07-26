import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [createComponent, bem] = createNamespace('tabbar');

export default createComponent({
  mixins: [ParentMixin('vanTabbar')],

  props: {
    route: Boolean,
    zIndex: [Number, String],
    placeholder: Boolean,
    activeColor: String,
    inactiveColor: String,
    modelValue: {
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

  emits: ['change', 'update:modelValue'],

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
    children: 'setActiveItem',
    modelValue: 'setActiveItem',
  },

  mounted() {
    if (this.placeholder && this.fixed) {
      this.height = this.$refs.tabbar.getBoundingClientRect().height;
    }
  },

  methods: {
    setActiveItem() {
      this.children.forEach((item, index) => {
        item.active = (item.name || index) === this.modelValue;
      });
    },

    onChange(active) {
      if (active !== this.modelValue) {
        this.$emit('update:modelValue', active);
        this.$emit('change', active);
      }
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
          {this.$slots.default?.()}
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
