/* eslint-disable object-shorthand */
import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('tab');

export default createComponent({
  mixins: [ChildrenMixin('vanTabs')],

  props: {
    name: [Number, String],
    title: String,
    disabled: Boolean
  },

  data() {
    return {
      inited: false
    };
  },

  computed: {
    computedName() {
      return this.name || this.index;
    },

    isActive() {
      return this.computedName === this.parent.currentName;
    }
  },

  watch: {
    'parent.currentIndex'() {
      this.inited = this.inited || this.isActive;
    },

    title() {
      this.parent.setLine();
    }
  },

  mounted() {
    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },

  render(h) {
    const { slots, isActive } = this;
    const shouldRender = this.inited || !this.parent.lazyRender;
    const Content = [shouldRender ? slots() : h()];

    if (slots('title')) {
      Content.push(<div ref="title">{slots('title')}</div>);
    }

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
