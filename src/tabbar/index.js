import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [createComponent, bem] = createNamespace('tabbar');

export default createComponent({
  mixins: [ParentMixin('vanTabbar')],

  props: {
    route: Boolean,
    zIndex: [Number, String],
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
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
  },

  watch: {
    value: 'setActiveItem',
    children: 'setActiveItem',
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
    },
  },

  render() {
    return (
      <div
        style={{ zIndex: this.zIndex }}
        class={[
          { [BORDER_TOP_BOTTOM]: this.border },
          bem({
            fixed: this.fixed,
            'safe-area-inset-bottom': this.safeAreaInsetBottom,
          }),
        ]}
      >
        {this.slots()}
      </div>
    );
  },
});
