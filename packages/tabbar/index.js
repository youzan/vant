import { use } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [sfc, bem] = use('tabbar');

export default sfc({
  mixins: [ParentMixin('vanTabbar')],

  props: {
    route: Boolean,
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
    value: {
      type: [String, Number],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
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
        item.active = (item.name || index) === this.value;
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
          { 'van-hairline--top-bottom': this.border },
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
