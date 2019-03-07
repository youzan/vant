/* eslint-disable object-shorthand */
import { use } from '../utils';
import { FindParentMixin } from '../mixins/find-parent';

const [sfc, bem] = use('tab');

export default sfc({
  mixins: [FindParentMixin],

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
    index() {
      return this.parent.tabs.indexOf(this);
    },

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

  created() {
    this.findParent('van-tabs');
  },

  mounted() {
    const { tabs } = this.parent;
    const index = this.parent.slots().indexOf(this.$vnode);
    tabs.splice(index === -1 ? tabs.length : index, 0, this);

    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },

  beforeDestroy() {
    this.parent.tabs.splice(this.index, 1);
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
