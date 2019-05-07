/* eslint-disable object-shorthand */
import { use } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [sfc, bem] = use('tab');

export default sfc({
  mixins: [ChildrenMixin('vanTabs')],

  props: {
    title: String,
    disabled: Boolean
  },

  data() {
    return {
      inited: false
    };
  },

  computed: {
    selected() {
      return this.index === this.parent.curActive;
    }
  },

  watch: {
    'parent.curActive'() {
      this.inited = this.inited || this.selected;
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
    const { slots } = this;
    const shouldRender = this.inited || !this.parent.lazyRender;

    return (
      <div vShow={this.selected || this.parent.animated} class={bem('pane')}>
        {shouldRender ? slots() : h()}
        {slots('title') && <div ref="title">{slots('title')}</div>}
      </div>
    );
  }
});
