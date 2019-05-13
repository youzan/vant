import { use } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [sfc, bem] = use('tabbar');

export default sfc({
  mixins: [ParentMixin('vanTabbar')],

  props: {
    value: Number,
    route: Boolean,
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },

  watch: {
    children() {
      this.setActiveItem();
    },

    value() {
      this.setActiveItem();
    }
  },

  methods: {
    setActiveItem() {
      this.children.forEach((item, index) => {
        item.active = index === this.value;
      });
    },

    onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },

  render(h) {
    return (
      <div
        style={{ zIndex: this.zIndex }}
        class={[
          'van-hairline--top-bottom',
          bem({
            fixed: this.fixed,
            'safe-area-inset-bottom': this.safeAreaInsetBottom
          })
        ]}
      >
        {this.slots()}
      </div>
    );
  }
});
