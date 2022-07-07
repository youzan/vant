// Utils
import { createNamespace, isDef } from '../utils';
import { getScroller } from '../utils/dom/scroll';

// Mixins
import { ParentMixin } from '../mixins/relation';
import { ClickOutsideMixin } from '../mixins/click-outside';

const [createComponent, bem] = createNamespace('dropdown-menu');

import son from './son';
export { son };

export default createComponent({
  mixins: [
    ParentMixin('vanDropdownMenu'),
    ClickOutsideMixin({
      event: 'click',
      method: 'onClickOutside',
    }),
  ],

  props: {
    route: {
      type: Boolean,
      default: true,
    },
    value: [Number, String],
    zIndex: [Number, String],
    activeColor: String,
    overlay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: [Number, String],
      default: 0.2,
    },
    direction: {
      type: String,
      default: 'down',
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      offset: 0,
    };
  },

  computed: {
    scroller() {
      return getScroller(this.$el);
    },

    opened() {
      return this.children.some((item) => item.showWrapper);
    },

    barStyle() {
      if (this.opened && isDef(this.zIndex)) {
        return {
          zIndex: 1 + this.zIndex,
        };
      }
    },
  },
  methods: {
    updateOffset() {
      if (!this.$refs.bar) {
        return;
      }

      const rect = this.$refs.bar.getBoundingClientRect();
      if (this.direction === 'down') {
        this.offset = rect.bottom;
      } else {
        this.offset = window.innerHeight - rect.top;
      }
    },

    toggleItem(active) {
      this.children.forEach((item, index) => {
        if (index === active) {
          item.toggle();
        } else if (item.showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    },

    onClickOutside() {
      // this.children.forEach((item) => {
      //   item.toggle(false);
      // });
    },
  },

  render() {
    const Titles = this.children.map((item, index) => {
      const aId = item.$vnode.context.$options._scopeId;
      return <div
        role="button"
        tabindex={item.disabled ? -1 : 0}
        class={bem('item', { disabled: item.disabled })}
        vusion-slot-name="title"
        vusion-slot-name-edit="title"
        vusion-scope-id={aId}
        vusion-node-path={item.$attrs['vusion-node-path']}
        vusion-node-tag={item.$attrs['vusion-node-tag']}
      >
        <span
          class={[
            bem('title', {
              active: item.showPopup,
              down: item.showPopup === (this.direction === 'down'),
            }),
            item.titleClass,
          ]}
          style={{ color: item.showPopup ? this.activeColor : '' }}
          vusion-click-enabled onClick={() => {
            if (!item.disabled) {
              this.toggleItem(index);
            }
          }}
        >
          <div class="van-ellipsis" vusion-slot-name="title" vusion-slot-name-edit="title">
            {item.slots('title') || item.displayTitle()}
          </div>
        </span>
      </div>
    });

    return (
      <div class={bem()}>
        <div
          ref="bar"
          style={this.barStyle}
          class={bem('bar', { opened: this.opened })}
        >
          {Titles}
        </div>
        {this.slots('default')}
      </div>
    );
  },
});
