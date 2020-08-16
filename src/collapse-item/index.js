// Utils
import { createNamespace, isDef } from '../utils';
import { raf, doubleRaf } from '../utils/dom/raf';

// Mixins
import { ChildrenMixin } from '../mixins/relation';

// Components
import Cell from '../cell';
import { cellProps } from '../cell/shared';

const [createComponent, bem] = createNamespace('collapse-item');

export default createComponent({
  mixins: [ChildrenMixin('vanCollapse')],

  props: {
    ...cellProps,
    name: [Number, String],
    disabled: Boolean,
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
      return isDef(this.name) ? this.name : this.index;
    },

    expanded() {
      if (!this.parent) {
        return null;
      }

      const { modelValue, accordion } = this.parent;

      if (
        process.env.NODE_ENV !== 'production' &&
        !accordion &&
        !Array.isArray(modelValue)
      ) {
        console.error(
          '[Vant] Collapse: type of prop "modelValue" should be Array'
        );
        return;
      }

      return accordion
        ? modelValue === this.currentName
        : modelValue.some((name) => name === this.currentName);
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
      if (this.disabled) {
        return;
      }

      const { parent, currentName } = this;
      const close = parent.accordion && currentName === parent.modelValue;
      const name = close ? '' : currentName;

      parent.switch(name, !this.expanded);
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

      const slots = {
        icon: this.$slots.icon,
        title: this.$slots.title,
        default: this.$slots.value,
        'right-icon': this.$slots['right-icon'],
      };

      return (
        <Cell
          v-slots={slots}
          role="button"
          class={bem('title', { disabled, expanded, borderless: !border })}
          onClick={this.onClick}
          tabindex={disabled ? -1 : 0}
          aria-expanded={String(expanded)}
          {...this.$props}
        />
      );
    },

    genContent() {
      if (this.inited) {
        return (
          <div
            vShow={this.show}
            ref="wrapper"
            class={bem('wrapper')}
            onTransitionend={this.onTransitionEnd}
          >
            <div ref="content" class={bem('content')}>
              {this.$slots.default?.()}
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
