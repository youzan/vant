import { use, isDef } from '../utils';
import { raf } from '../utils/raf';
import Cell from '../cell';
import CellMixin from '../mixins/cell';
import FindParent from '../mixins/find-parent';

const [sfc, bem] = use('collapse-item');
const CELL_SLOTS = ['title', 'icon', 'right-icon'];

export default sfc({
  mixins: [CellMixin, FindParent],

  props: {
    name: [String, Number],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      show: null,
      inited: null
    };
  },

  computed: {
    items() {
      return this.parent.items;
    },

    index() {
      return this.items.indexOf(this);
    },

    currentName() {
      return isDef(this.name) ? this.name : this.index;
    },

    expanded() {
      if (!this.parent) {
        return null;
      }

      const { value } = this.parent;
      return this.parent.accordion
        ? value === this.currentName
        : value.some(name => name === this.currentName);
    }
  },

  created() {
    this.findParent('van-collapse');
    this.items.push(this);
    this.show = this.expanded;
    this.inited = this.expanded;
  },

  destroyed() {
    this.items.splice(this.index, 1);
  },

  watch: {
    expanded(expanded, prev) {
      if (prev === null) {
        return;
      }

      if (expanded) {
        this.show = true;
        this.inited = true;
      }

      this.$nextTick(() => {
        const { content, wrapper } = this.$refs;
        if (!content || !wrapper) {
          return;
        }

        const contentHeight = `${content.clientHeight}px`;
        wrapper.style.height = expanded ? 0 : contentHeight;
        raf(() => {
          wrapper.style.height = expanded ? contentHeight : 0;
        });
      });
    }
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }

      const { parent } = this;
      const name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      const expanded = !this.expanded;
      this.parent.switch(name, expanded);
    },

    onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = null;
      }
    }
  },

  render(h) {
    const Title = (
      <Cell
        class={bem('title', { disabled: this.disabled, expanded: this.expanded })}
        onClick={this.onClick}
        {...{ props: this.$props }}
      >
        {this.$slots.value}
        {CELL_SLOTS.map(slot => h('template', { slot }, this.$slots[slot]))}
      </Cell>
    );

    const Content = this.inited && (
      <div
        v-show={this.show}
        ref="wrapper"
        class={bem('wrapper')}
        onTransitionend={this.onTransitionEnd}
      >
        <div ref="content" class={bem('content')}>
          {this.$slots.default}
        </div>
      </div>
    );

    return (
      <div class={[bem(), { 'van-hairline--top': this.index }]}>
        {Title}
        {Content}
      </div>
    );
  }
});
