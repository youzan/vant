import { isDef, createNamespace } from '../utils';
import { isNumeric } from '../utils/validate/number';

import VanEmptyCol from '../emptycol'

const [createComponent, bem] = createNamespace('badge');

export default createComponent({
  props: {
    dot: Boolean,
    max: [Number, String],
    color: String,
    content: [Number, String],
    tag: {
      type: String,
      default: 'div',
    },
  },
  components: {
    VanEmptyCol,
  },
  methods: {
    ifDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    },
    hasContent() {
      return !!(
        this.$scopedSlots.content ||
        (isDef(this.content) && this.content !== '')
      );
    },

    renderContent() {
      const { dot, max, content } = this;

      if (!dot && this.hasContent()) {
        if (this.$scopedSlots.content) {
          return this.$scopedSlots.content();
        }

        if (isDef(max) && isNumeric(content) && +content > max) {
          return `${max}+`;
        }

        return content;
      }
    },

    renderBadge() {
      if (this.hasContent() || this.dot) {
        return (
          <div
            class={bem({ dot: this.dot, fixed: !!this.$scopedSlots.default || this.ifDesigner() })}
            style={{ background: this.color }}
          >
            {this.renderContent()}
          </div>
        );
      }
    },
  },

  render() {
    if (this.$scopedSlots.default) {
      const { tag } = this;
      return (
        <tag class={bem('wrapper')}>
          {this.$scopedSlots.default()}
          {this.renderBadge()}
        </tag>
      );
    }
    if (this.ifDesigner()) {
      const { tag } = this;
      return (
        <div class={bem('wrapper')} vusion-slot-name="default">
          <van-empty-col></van-empty-col>
          {this.renderBadge()}
        </div>
      );
    }
    return this.renderBadge();
  },
});
