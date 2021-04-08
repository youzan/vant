import { PropType, CSSProperties, defineComponent } from 'vue';
import { isDef, isNumeric, createNamespace } from '../utils';

const [name, bem] = createNamespace('badge');

export default defineComponent({
  name,

  props: {
    dot: Boolean,
    max: [Number, String],
    color: String,
    offset: (Array as unknown) as PropType<[number, number]>,
    content: [Number, String],
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    showZero: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    const hasContent = () => {
      if (slots.content) {
        return true;
      }
      const { content, showZero } = props;
      return isDef(content) && content !== '' && (showZero || content !== 0);
    };

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
        const style: CSSProperties = {
          background: props.color,
        };

        if (props.offset) {
          const [x, y] = props.offset;
          if (slots.default) {
            style.top = `${y}px`;
            style.right = `${-x}px`;
          } else {
            style.marginTop = `${y}px`;
            style.marginLeft = `${x}px`;
          }
        }

        return (
          <div
            class={bem({ dot: props.dot, fixed: !!slots.default })}
            style={style}
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
