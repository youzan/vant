import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { routeProps } from '../composition/use-route';

const [createComponent, bem] = createNamespace('tab');

export default createComponent({
  mixins: [ChildrenMixin('vanTabs')],

  props: {
    ...routeProps,
    dot: Boolean,
    name: [Number, String],
    badge: [Number, String],
    title: String,
    titleStyle: null,
    disabled: Boolean,
  },

  data() {
    return {
      inited: false,
    };
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
    },

    inited(val) {
      if (this.parent.lazyRender && val) {
        this.$nextTick(() => {
          this.parent.$emit('rendered', this.computedName, this.title);
        });
      }
    },
  },

  render() {
    const { parent, isActive } = this;
    const shouldRender = this.inited || parent.scrollspy || !parent.lazyRender;
    const show = parent.scrollspy || isActive;
    const Content = shouldRender ? this.$slots.default?.() : null;

    if (parent.animated) {
      return (
        <div
          role="tabpanel"
          aria-hidden={!isActive}
          class={bem('pane-wrapper', { inactive: !isActive })}
        >
          <div class={bem('pane')}>{Content}</div>
        </div>
      );
    }

    return (
      <div vShow={show} role="tabpanel" class={bem('pane')}>
        {Content}
      </div>
    );
  },
});
