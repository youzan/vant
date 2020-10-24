import type { PropType } from 'vue';
import { isDef, createNamespace } from '../utils';
import { isNumeric } from '../utils/validate/number';

const [createComponent, bem] = createNamespace('badge');

export default createComponent({
  props: {
    dot: Boolean,
    max: [Number, String],
    color: String,
    content: [Number, String],
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
  },

  setup(props, { slots }) {
    const hasContent = () =>
      !!(slots.content || (isDef(props.content) && props.content !== ''));

    const renderContent = () => {
      const { dot, max, content } = props;

      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content();
        }

        if (isDef(max) && isNumeric(content!) && +content > max) {
          return `${max}+`;
        }

        return content;
      }
    };

    const renderBadge = () => {
      if (hasContent() || props.dot) {
        return (
          <div
            class={bem({ dot: props.dot, fixed: !!slots.default })}
            style={{ background: props.color }}
          >
            {renderContent()}
          </div>
        );
      }
    };

    return () => {
      if (slots.default) {
        const { tag } = props;
        return (
          <tag class={bem('wrapper')}>
            {slots.default()}
            {renderBadge()}
          </tag>
        );
      }

      return renderBadge();
    };
  },
});
