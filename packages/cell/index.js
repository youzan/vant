import { use, isDef } from '../utils';
import { cellProps } from './shared';
import { emit, inherit, unifySlots } from '../utils/functional';
import { routeProps, functionalRoute } from '../mixins/router-link';
import Icon from '../icon';

const [sfc, bem] = use('cell');

export default sfc({
  functional: true,

  props: {
    ...cellProps,
    ...routeProps,
    size: String,
    clickable: Boolean,
    arrowDirection: String
  },

  render(h, context) {
    const slots = unifySlots(context);
    const { props } = context;
    const { icon, size, title, label, value, isLink, arrowDirection } = props;

    const showTitle = slots.title || isDef(title);
    const showValue = slots.default || isDef(value);

    const Title = showTitle && (
      <div class={[bem('title'), props.titleClass]}>
        {slots.title ? slots.title() : <span>{title}</span>}
        {label && <div class={[bem('label'), props.labelClass]}>{label}</div>}
      </div>
    );

    const Value = showValue && (
      <div
        class={[
          bem('value', { alone: !slots.title && !title }),
          props.valueClass
        ]}
      >
        {slots.default ? slots.default() : <span>{value}</span>}
      </div>
    );

    const LeftIcon = slots.icon
      ? slots.icon()
      : icon && <Icon class={bem('left-icon')} name={icon} />;

    const RightIcon = slots['right-icon']
      ? slots['right-icon']()
      : isLink && (
          <Icon
            class={bem('right-icon')}
            name={arrowDirection ? `arrow-${arrowDirection}` : 'arrow'}
          />
      );

    const onClick = event => {
      emit(context, 'click', event);
      functionalRoute(context);
    };

    return (
      <div
        class={bem({
          center: props.center,
          required: props.required,
          borderless: !props.border,
          clickable: isLink || props.clickable,
          [size]: size
        })}
        onClick={onClick}
        {...inherit(context)}
      >
        {LeftIcon}
        {Title}
        {Value}
        {RightIcon}
        {slots.extra && slots.extra()}
      </div>
    );
  }
});
