// Utils
import { createNamespace } from '../utils';
import { raf, doubleRaf } from '../utils/dom/raf';

// Mixins
import { ChildrenMixin } from '../mixins/relation';

// Components
import Cell from '../cell';
import { cellProps } from '../cell/shared';

const [createComponent, bem] = createNamespace('collapse-item');

const CELL_SLOTS = ['title', 'icon', 'right-icon'];

export default createComponent({
  mixins: [ChildrenMixin('vanCollapse')],

  props: {
    ...cellProps,
    name: [Number, String],
    disabled: Boolean,
    lazyRender: {
      type: Boolean,
      default: true,
    },
    isLink: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      show: null,
      inited: null,
    };
  },

  computed: {
    currentName() {
      return this.name ?? this.index;
    },

    expanded() {
      if (!this.parent) {
        return null;
      }

      const { value, accordion } = this.parent;

      if (
        process.env.NODE_ENV === 'development' &&
        !accordion &&
        !Array.isArray(value)
      ) {
        console.error('[Vant] Collapse: type of prop "value" should be Array');
        return;
      }

      return accordion
        ? value === this.currentName
        : value.some((name) => name === this.currentName);
    },
  },

  created() {
    this.show = this.expanded;
    this.inited = this.expanded;
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

      // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`
      const nextTick = expanded ? this.$nextTick : raf;

      nextTick(() => {
        const { content, wrapper } = this.$refs;

        if (!content || !wrapper) {
          return;
        }

        const { offsetHeight } = content;
        if (offsetHeight) {
          const contentHeight = `${offsetHeight}px`;
          wrapper.style.height = expanded ? 0 : contentHeight;

          // use double raf to ensure animation can start
          doubleRaf(() => {
            wrapper.style.height = expanded ? contentHeight : 0;
          });
        } else {
          this.onTransitionEnd();
        }
      });
    },
  },

  methods: {
    onClick() {
      if (!this.disabled) {
        this.toggle();
      }
    },

    // @exposed-api
    toggle(expanded = !this.expanded) {
      const { parent, currentName } = this;
      const close = parent.accordion && currentName === parent.value;
      const name = close ? '' : currentName;
      this.parent.switch(name, expanded);
    },

    onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    },

    genTitle() {
      const { border, disabled, expanded } = this;

      const titleSlots = CELL_SLOTS.reduce((slots, name) => {
        if (this.slots(name)) {
          slots[name] = () => this.slots(name);
        }

        return slots;
      }, {});

      if (this.slots('value')) {
        titleSlots.default = () => this.slots('value');
      }

      return (
        <Cell
          role="button"
          class={bem('title', { disabled, expanded, borderless: !border })}
          onClick={this.onClick}
          scopedSlots={titleSlots}
          tabindex={disabled ? -1 : 0}
          aria-expanded={String(expanded)}
          {...{ props: this.$props }}
        />
      );
    },

    genContent() {
      if (this.inited || !this.lazyRender) {
        return (
          <div
            vShow={this.show}
            ref="wrapper"
            class={bem('wrapper')}
            onTransitionend={this.onTransitionEnd}
          >
            <div ref="content" class={bem('content')}>
              {this.slots()}
            </div>
          </div>
        );
      }
    },
  },

  render() {
    return (
      <div class={[bem({ border: this.index && this.border })]}>
        {this.genTitle()}
        {this.genContent()}
      </div>
    );
  },
});
