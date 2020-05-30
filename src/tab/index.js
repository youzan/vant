import { isDef, createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { routeProps } from '../utils/router';

const [createComponent, bem] = createNamespace('tab');

export default createComponent({
  mixins: [ChildrenMixin('vanTabs')],

  props: {
    ...routeProps,
    dot: Boolean,
    name: [Number, String],
    info: [Number, String],
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
      return isDef(this.name) ? this.name : this.index;
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

  render(h) {
    const { slots, parent, isActive } = this;
    const shouldRender = this.inited || parent.scrollspy || !parent.lazyRender;
    const show = parent.scrollspy || isActive;
    const Content = shouldRender ? slots() : h();

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
