import { isDef, createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { routeProps } from '../utils/router';

const [createComponent, bem] = createNamespace('tab');

export default createComponent({
  mixins: [ChildrenMixin('vanTabs')],

  props: {
    ...routeProps,
    name: [Number, String],
    title: String,
    titleStyle: null,
    disabled: Boolean
  },

  data() {
    return {
      inited: false
    };
  },

  computed: {
    computedName() {
      return isDef(this.name) ? this.name : this.index;
    },

    isActive() {
      return this.computedName === this.parent.currentName;
    }
  },

  watch: {
    // eslint-disable-next-line object-shorthand
    'parent.currentIndex'() {
      this.inited = this.inited || this.isActive;
    },

    title() {
      this.parent.setLine();
    }
  },

  render(h) {
    const { slots, isActive } = this;
    const shouldRender = this.inited || !this.parent.lazyRender;
    const Content = shouldRender ? slots() : h();

    if (this.parent.animated) {
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
      <div vShow={isActive} role="tabpanel" class={bem('pane')}>
        {Content}
      </div>
    );
  }
});
