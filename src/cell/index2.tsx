// Utils
import { createNamespace, isDef } from '../utils';
import { emit, inherit } from '../utils/functional';
import { routeProps, RouteProps, functionalRoute } from '../utils/router';
import { cellProps, SharedCellProps } from './shared';
import encodeUrl from '../utils/encodeUrl';

// Components
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/types';
import { Mods } from '../utils/create/bem';

import VanEmptyCol from '../emptycol/index';


export type CellProps = RouteProps & SharedCellProps;

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

const [createComponent, bem] = createNamespace('cell');

function Cell(
  h: CreateElement,
  props: CellProps,
  slots: CellSlots,
  ctx: RenderContext<CellProps>
) {
  const { icon, size, title, label, value, isLink } = props;
  const showTitle = slots.title || isDef(title);

  function Label() {
    const showLabel = slots.label || isDef(label);

    if (showLabel) {
      return (
        <div class={[bem('label'), props.labelClass]} vusion-slot-name="label" vusion-slot-name-edit="label">
          {slots.label ? slots.label() : label}
        </div>
      );
    }
  }

  function Title() {
    if (showTitle) {
      return (
        <div class={[bem('title'), props.titleClass]} style={props.titleStyle} vusion-slot-name="title" vusion-slot-name-edit="title">
          {slots.title ? slots.title() : title}
          {/* {Label()} */}
        </div>
      );
    }
  }

  function Value() {
    const showValue = slots.default || isDef(value);
    // @ts-ignore
    const ifDesigner = (ctx.parent.$env && ctx.parent.$env.VUE_APP_DESIGNER);

    // if (showValue) {
    return (
      <div class={[bem('value', { alone: !showTitle }), props.valueClass]} vusion-slot-name="default">
        {slots.default ? slots.default() : (isDef(value) ? <span>{value}</span> : null)}
        {(ifDesigner && !isDef(value) && !slots.default) ? <VanEmptyCol></VanEmptyCol> : null}
      </div>
    );
    // }
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
          name={(arrowDirection && arrowDirection !== 'right') ? `arrow-${arrowDirection}` : 'arrow'}
        />
      );
    }
  }

  function currentHref() {
    if (props.href !== undefined)
      return encodeUrl(props.href);
    if (ctx.parent?.$router && props.to !== undefined)
      return encodeUrl(ctx.parent?.$router.resolve(props.to, ctx.parent?.$route, props.append).href);
    return undefined;
  }

  function onClick(event: Event) {
    emit(ctx, 'click', event);
    const hrefR = currentHref();
    if (!hrefR && !ctx.listeners.click) {
      event.preventDefault();
    }
    // @ts-ignore：没办法
    if (props.target !== '_self')
      return;

    if (hrefR === undefined) {
      let to;
      if (props.destination) {
        if (props.destination.startsWith('http')) {
          location.href = encodeUrl(props.destination);
          return;
        }
        to = props.destination;
      }


      const currentTo = to || props.to;
      if (currentTo === undefined)
        return;
      let cancel = false;
      emit(ctx, 'before-navigate', {
        to: currentTo,
        replace: props.replace,
        append: props.append,
        preventDefault: () => (cancel = true),
      });
      if (cancel)
        return;
      const $router = ctx.parent?.$router;
      const $route = ctx.parent?.$route;
      const { location } = $router.resolve(
        currentTo,
        $route,
        props.append,
      );
      props.replace ? $router.replace(location) : $router.push(location);

      emit(ctx, 'navigate', { to: currentTo, replace: props.replace, append: props.append });
    } else {
      function downloadClick() {
        const a = document.createElement("a");
        a.setAttribute("href", hrefR as string);
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
        }, 500);
      }
      downloadClick();
    }

    // functionalRoute(ctx);
  }

  const clickable = props.clickable ?? isLink;

  const classes: Mods = {
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
      {...inherit(ctx)}
      vusion-cut={ctx.props.vusionCut}
      vusion-move={ctx.props.vusionMove}
      vusion-node-path={ctx.props.vusionNodePath}
      vusion-node-tag={ctx.props.vusionNodeTag}
    >
      {LeftIcon()}
      {Title()}
      {Value()}
      {RightIcon()}
      {slots.extra?.()}
    </div>
  );
}

Cell.props = {
  ...cellProps,
  ...routeProps,
};

export default createComponent<CellProps, CellEvents, CellSlots>(Cell);
