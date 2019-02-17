import { use, isDef } from '../utils';
import { cellProps } from './shared';
import { emit, inherit } from '../utils/functional';
import { routeProps, functionalRoute } from '../mixins/router';
import Icon from '../icon';

// Types
import { SharedCellProps } from './shared';
import { FunctionalComponent } from '../utils/use/sfc';
import { Mods } from '../utils/use/bem';

const [sfc, bem] = use('cell');

const Cell: FunctionalComponent<CellProps> = function(h, props, slots, ctx) {
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
    <div
      class={bem(classes)}
      onClick={onClick}
      {...inherit(ctx)}
    >
      {LeftIcon}
      {Title}
      {Value}
      {RightIcon}
      {slots.extra && slots.extra()}
    </div>
  );
}

export type CellProps = SharedCellProps & {
  size?: string;
  clickable?: boolean;
  arrowDirection?: string;
}

Cell.props = {
  ...cellProps,
  ...routeProps,
  size: String,
  clickable: Boolean,
  arrowDirection: String
};

export default sfc<CellProps>(Cell);
