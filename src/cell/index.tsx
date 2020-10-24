import { PropType } from 'vue';

// Utils
import { createNamespace, isDef } from '../utils';

// Composition
import { useRoute, routeProps } from '../composition/use-route';

// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('cell');

export type CellArrowDirection = 'up' | 'down' | 'left' | 'right';

export const cellProps = {
  icon: String,
  size: String as PropType<'large'>,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  iconPrefix: String,
  titleStyle: null as any,
  titleClass: null as any,
  valueClass: null as any,
  labelClass: null as any,
  arrowDirection: String as PropType<CellArrowDirection>,
  border: {
    type: Boolean,
    default: true,
  },
};

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

      const classes: Record<string, boolean | undefined> = {
        center,
        required,
        clickable,
        borderless: !border,
      };
      if (size) {
        classes[size] = !!size;
      }

      return (
        <div
          class={bem(classes)}
          role={clickable ? 'button' : undefined}
          tabindex={clickable ? 0 : undefined}
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
