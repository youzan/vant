import { createNamespace } from '../utils';
import { BLUE } from '../utils/color';
import { ParentMixin } from '../mixins/relation';
import { ClickOutsideMixin } from '../mixins/click-outside';

const [createComponent, bem] = createNamespace('dropdown-menu');

export default createComponent({
  mixins: [
    ParentMixin('vanDropdownMenu'),
    ClickOutsideMixin({
      event: 'click',
      method: 'onClickOutside'
    })
  ],

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
    direction: {
      type: String,
      default: 'down'
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
      offset: 0
    };
  },

  methods: {
    toggleItem(active) {
      const { menu } = this.$refs;
      const rect = menu.getBoundingClientRect();

      if (this.direction === 'down') {
        this.offset = rect.bottom;
      } else {
        this.offset = window.innerHeight - rect.top;
      }

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
          class={[
            bem('title', {
              down: item.showPopup === (this.direction === 'down')
            }),
            item.titleClass
          ]}
          style={{ color: item.showPopup ? this.activeColor : '' }}
        >
          <div class="van-ellipsis">{item.displayTitle}</div>
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
