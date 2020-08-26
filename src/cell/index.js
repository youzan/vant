// Utils
import { createNamespace, isDef } from '../utils';
import { useRoute, routeProps } from '../utils/router';
import { cellProps } from './shared';

// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('cell');

export default createComponent({
  props: {
    ...cellProps,
    ...routeProps,
  },

  setup(props, { slots }) {
    const route = useRoute();

    const renderLabel = () => {
      const showLabel = slots.label || isDef(props.label);

      if (showLabel) {
        return (
          <div class={[bem('label'), props.labelClass]}>
            {slots.label ? slots.label() : props.label}
          </div>
        );
      }
    };

    const renderTitle = () => {
      if (slots.title || isDef(props.title)) {
        return (
          <div
            class={[bem('title'), props.titleClass]}
            style={props.titleStyle}
          >
            {slots.title ? slots.title() : <span>{props.title}</span>}
            {renderLabel()}
          </div>
        );
      }
    };

    const renderValue = () => {
      const hasTitle = slots.title || isDef(props.title);
      const hasValue = slots.default || isDef(props.value);

      if (hasValue) {
        return (
          <div class={[bem('value', { alone: !hasTitle }), props.valueClass]}>
            {slots.default ? slots.default() : <span>{props.value}</span>}
          </div>
        );
      }
    };

    const renderLeftIcon = () => {
      if (slots.icon) {
        return slots.icon();
      }

      if (props.icon) {
        return (
          <Icon
            name={props.icon}
            class={bem('left-icon')}
            classPrefix={props.iconPrefix}
          />
        );
      }
    };

    const renderRightIcon = () => {
      if (slots['right-icon']) {
        return slots['right-icon']();
      }

      if (props.isLink) {
        const name = props.arrowDirection
          ? `arrow-${props.arrowDirection}`
          : 'arrow';
        return <Icon name={name} class={bem('right-icon')} />;
      }
    };

    return () => {
      const { size, center, border, isLink, required } = props;
      const clickable = isLink || props.clickable;

      const classes = {
        center,
        required,
        clickable,
        borderless: !border,
      };
      if (size) {
        classes[size] = size;
      }

      return (
        <div
          class={bem(classes)}
          role={clickable ? 'button' : null}
          tabindex={clickable ? 0 : null}
          onClick={route}
        >
          {renderLeftIcon()}
          {renderTitle()}
          {renderValue()}
          {renderRightIcon()}
          {slots.extra?.()}
        </div>
      );
    };
  },
});
