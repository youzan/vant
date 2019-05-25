import { use } from '../utils';
import { BLUE } from '../utils/color';
import { ParentMixin } from '../mixins/relation';
import { ClickOutsideMixin } from '../mixins/click-outside';

const [sfc, bem] = use('dropdown-menu');

export default sfc({
  mixins: [ParentMixin('vanDropdownMenu'), ClickOutsideMixin({
    event: 'click',
    method: 'onClickOutside'
  })],

  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 0.2
    },
    activeColor: {
      type: String,
      default: BLUE
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      top: 0
    };
  },

  methods: {
    toggleItem(active) {
      const { menu } = this.$refs;
      const rect = menu.getBoundingClientRect();
      this.top = rect.top + rect.height;

      this.children.forEach((item, index) => {
        if (index === active) {
          item.toggle();
        } else if (item.showPopup) {
          item.hide(true);
        }
      });
    },

    onClickOutside() {
      this.children.forEach(item => {
        item.hide();
      });
    }
  },

  render(h) {
    const Titles = this.children.map((item, index) => (
      <div
        role="button"
        tabindex={item.disabled ? -1 : 0}
        class={bem('item', { disabled: item.disabled })}
        onClick={() => {
          if (!item.disabled) {
            this.toggleItem(index);
          }
        }}
      >
        <span
          class={[bem('title', { active: item.show }), item.titleClass]}
          style={{ color: item.showPopup ? this.activeColor : '' }}
        >
          {item.displayTitle}
        </span>
      </div>
    ));

    return (
      <div ref="menu" class={[bem(), 'van-hairline--top-bottom']}>
        {Titles}
        {this.slots('default')}
      </div>
    );
  }
});
