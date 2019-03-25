import { use, isDef } from '../utils';
import { cellProps, SharedCellProps } from './shared';
import { emit, inherit } from '../utils/functional';
import { routeProps, RouteProps, functionalRoute } from '../utils/router';
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/use/sfc';
import { Mods } from '../utils/use/bem';

export type CellProps = RouteProps &
  SharedCellProps & {
    clickable?: boolean;
    arrowDirection?: string;
  };

export type CellSlots = DefaultSlots & {
  icon?: ScopedSlot;
  title?: ScopedSlot;
  label?: ScopedSlot;
  extra?: ScopedSlot;
  'right-icon'?: ScopedSlot;
};

export type CellEvents = {
  onClick?(event: Event): void;
};

const [sfc, bem] = use('cell');

function Cell(
  h: CreateElement,
  props: CellProps,
  slots: CellSlots,
  ctx: RenderContext<CellProps>
) {
  const { icon, size, title, label, value, isLink, arrowDirection } = props;

  const showTitle = slots.title || isDef(title);
  const showValue = slots.default || isDef(value);
  const showLabel = slots.label || isDef(label);

  const Label = showLabel && (
    <div class={[bem('label'), props.labelClass]}>
      {slots.label ? slots.label() : label}
    </div>
  );

  const Title = showTitle && (
    <div class={[bem('title'), props.titleClass]}>
      {slots.title ? slots.title() : <span>{title}</span>}
      {Label}
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

  const rightIconSlot = slots['right-icon'];
  const RightIcon = rightIconSlot
    ? rightIconSlot()
    : isLink && (
        <Icon
          class={bem('right-icon')}
          name={arrowDirection ? `arrow-${arrowDirection}` : 'arrow'}
        />
    );

  const onClick = (event: Event) => {
    emit(ctx, 'click', event);
    functionalRoute(ctx);
  };

  const classes: Mods = {
    center: props.center,
    required: props.required,
    borderless: !props.border,
    clickable: isLink || props.clickable
  };

  if (size) {
    classes[size] = size;
  }

  return (
    <div class={bem(classes)} onClick={onClick} {...inherit(ctx)}>
      {LeftIcon}
      {Title}
      {Value}
      {RightIcon}
      {slots.extra && slots.extra()}
    </div>
  );
}

Cell.props = {
  ...cellProps,
  ...routeProps,
  clickable: Boolean,
  arrowDirection: String
};

export default sfc<CellProps, CellEvents, CellSlots>(Cell);
