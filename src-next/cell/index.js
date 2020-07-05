// Utils
import { createNamespace, isDef } from '../utils';
import { route, routeProps } from '../utils/router';
import { cellProps } from './shared';

// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('cell');

export default createComponent({
  props: {
    ...cellProps,
    ...routeProps,
  },

  setup(props, { slots, emit }) {
    return function () {
      const { icon, size, title, label, value, isLink } = props;
      const showTitle = slots.title || isDef(title);

      function Label() {
        const showLabel = slots.label || isDef(label);

        if (showLabel) {
          return (
            <div class={[bem('label'), props.labelClass]}>
              {slots.label ? slots.label() : label}
            </div>
          );
        }
      }

      function Title() {
        if (showTitle) {
          return (
            <div
              class={[bem('title'), props.titleClass]}
              style={props.titleStyle}
            >
              {slots.title ? slots.title() : <span>{title}</span>}
              {Label()}
            </div>
          );
        }
      }

      function Value() {
        const showValue = slots.default || isDef(value);

        if (showValue) {
          return (
            <div
              class={[bem('value', { alone: !showTitle }), props.valueClass]}
            >
              {slots.default ? slots.default() : <span>{value}</span>}
            </div>
          );
        }
      }

      function LeftIcon() {
        if (slots.icon) {
          return slots.icon();
        }

        if (icon) {
          return (
            <Icon
              class={bem('left-icon')}
              name={icon}
              classPrefix={props.iconPrefix}
            />
          );
        }
      }

      function RightIcon() {
        const rightIconSlot = slots['right-icon'];

        if (rightIconSlot) {
          return rightIconSlot();
        }

        if (isLink) {
          const { arrowDirection } = props;

          return (
            <Icon
              class={bem('right-icon')}
              name={arrowDirection ? `arrow-${arrowDirection}` : 'arrow'}
            />
          );
        }
      }

      const onClick = (event) => {
        emit('click', event);
        route(this.$router, this);
      };

      const clickable = isLink || props.clickable;

      const classes = {
        clickable,
        center: props.center,
        required: props.required,
        borderless: !props.border,
      };

      if (size) {
        classes[size] = size;
      }

      return (
        <div
          class={bem(classes)}
          role={clickable ? 'button' : null}
          tabindex={clickable ? 0 : null}
          onClick={onClick}
        >
          {LeftIcon()}
          {Title()}
          {Value()}
          {RightIcon()}
          {slots.extra?.()}
        </div>
      );
    };
  },
});
