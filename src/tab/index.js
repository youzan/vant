import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { routeProps } from '../utils/router';

import VanEmptyCol  from '../emptycol/index';

const [createComponent, bem] = createNamespace('tab');

export default createComponent({
  mixins: [ChildrenMixin('vanTabs')],

  props: {
    ...routeProps,
    dot: Boolean,
    name: [Number, String],
    // @deprecated
    info: [Number, String],
    badge: [Number, String],
    badgebtn: Boolean,
    badgemax: Number,
    title: String,
    titleStyle: null,
    titleClass: null,
    disabled: Boolean,
  },

  data() {
    return {
      inited: false,
    };
  },
  components: {
    VanEmptyCol
  },
  computed: {
    computedName() {
      return this.name ?? this.index;
    },

    isActive() {
      const active = this.computedName === this.parent.currentName;

      if (active) {
        this.inited = true;
      }
      return active;
    },
  },

  watch: {
    title() {
      this.parent.setLine();
      this.parent.scrollIntoView();
    },

    inited(val) {
      if (this.parent.lazyRender && val) {
        this.$nextTick(() => {
          this.parent.$emit('rendered', this.computedName, this.title);
        });
      }
    },
  },

  render(h) {
    const { slots, parent, isActive } = this;
    const slotContent = slots();
    let tempContent = slotContent;
    if (process.env.NODE_ENV === 'development' && this.info) {
      console.warn(
        '[Vant] Tab: "info" prop is deprecated, use "badge" prop instead.'
      );
    }
    if (!tempContent && this.$env && this.$env.VUE_APP_DESIGNER) {
      tempContent = <van-empty-col></van-empty-col>;
    }
    if (!tempContent && !parent.animated) {
      return;
    }

    const show = parent.scrollspy || isActive;
    const shouldRender = this.inited || parent.scrollspy || !parent.lazyRender;
    let Content = shouldRender ? tempContent : h();

    if (parent.animated) {
      return (
        <div
          role="tabpanel"
          aria-hidden={!isActive}
          class={bem('pane-wrapper', { inactive: !isActive })}
        >
          <div class={bem('pane')} vusion-slot-name="default">{Content}</div>
        </div>
      );
    }

    return (
      <div vShow={show} role="tabpanel" class={bem('pane')} vusion-slot-name="default">
        {Content}
      </div>
    );
  },
});
