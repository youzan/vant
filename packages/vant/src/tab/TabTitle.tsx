import { computed, defineComponent, type CSSProperties } from 'vue';
import { isDef, truthProp, numericProp, createNamespace } from '../utils';
import { Badge } from '../badge';

const [name, bem] = createNamespace('tab');

export const TabTitle = defineComponent({
  name,

  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: numericProp,
    shrink: Boolean,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    showZeroBadge: truthProp,
  },

  setup(props, { slots }) {
    const style = computed(() => {
      const style: CSSProperties = {};
      const { type, color, disabled, isActive, activeColor, inactiveColor } =
        props;

      const isCard = type === 'card';

      // card theme color
      if (color && isCard) {
        style.borderColor = color;

        if (!disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      const titleColor = isActive ? activeColor : inactiveColor;
      if (titleColor) {
        style.color = titleColor;
      }

      return style;
    });

    const renderText = () => {
      const Text = (
        <span class={bem('text', { ellipsis: !props.scrollable })}>
          {slots.title ? slots.title() : props.title}
        </span>
      );

      if (props.dot || (isDef(props.badge) && props.badge !== '')) {
        return (
          <Badge
            dot={props.dot}
            content={props.badge}
            showZero={props.showZeroBadge}
          >
            {Text}
          </Badge>
        );
      }

      return Text;
    };

    return () => (
      <div
        id={props.id}
        role="tab"
        class={[
          bem([
            props.type,
            {
              grow: props.scrollable && !props.shrink,
              shrink: props.shrink,
              active: props.isActive,
              disabled: props.disabled,
            },
          ]),
        ]}
        style={style.value}
        tabindex={props.disabled ? undefined : props.isActive ? 0 : -1}
        aria-selected={props.isActive}
        aria-disabled={props.disabled || undefined}
        aria-controls={props.controls}
      >
        {renderText()}
      </div>
    );
  },
});
