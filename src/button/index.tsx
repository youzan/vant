// Utils
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import { BORDER_SURROUND, WHITE } from '../utils/constant';
import { routeProps, RouteProps, functionalRoute } from '../utils/router';

// Components
import Icon from '../icon';
import Loading, { LoadingType } from '../loading';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export type ButtonProps = RouteProps & {
  tag: keyof HTMLElementTagNameMap | string;
  type: ButtonType;
  size: ButtonSize;
  text?: string;
  icon?: string;
  color?: string;
  block?: boolean;
  plain?: boolean;
  round?: boolean;
  square?: boolean;
  loading?: boolean;
  hairline?: boolean;
  disabled?: boolean;
  nativeType?: string;
  iconPrefix?: string;
  loadingSize: string;
  loadingType?: LoadingType;
  loadingText?: string;
};

export type ButtonEvents = {
  onClick?(event: Event): void;
};

const [createComponent, bem] = createNamespace('button');

function Button(
  h: CreateElement,
  props: ButtonProps,
  slots: DefaultSlots,
  ctx: RenderContext<ButtonProps>
) {
  const {
    tag,
    icon,
    type,
    color,
    plain,
    disabled,
    loading,
    hairline,
    loadingText,
  } = props;

  const style: Record<string, string | number> = {};

  if (color) {
    style.color = plain ? color : WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    }

    // hide border when color is linear-gradient
    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  function onClick(event: Event) {
    if (!loading && !disabled) {
      emit(ctx, 'click', event);
      functionalRoute(ctx);
    }
  }

  function onTouchstart(event: TouchEvent) {
    emit(ctx, 'touchstart', event);
  }

  const classes = [
    bem([
      type,
      props.size,
      {
        plain,
        loading,
        disabled,
        hairline,
        block: props.block,
        round: props.round,
        square: props.square,
      },
    ]),
    { [BORDER_SURROUND]: hairline },
  ];

  function Content() {
    const content = [];

    if (loading) {
      content.push(
        <Loading
          class={bem('loading')}
          size={props.loadingSize}
          type={props.loadingType}
          color="currentColor"
        />
      );
    } else if (icon) {
      content.push(
        <Icon name={icon} class={bem('icon')} classPrefix={props.iconPrefix} />
      );
    }

    let text;
    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(<span class={bem('text')}>{text}</span>);
    }

    return content;
  }

  return (
    <tag
      style={style}
      class={classes}
      type={props.nativeType}
      disabled={disabled}
      onClick={onClick}
      onTouchstart={onTouchstart}
      {...inherit(ctx)}
    >
      <div class={bem('content')}>{Content()}</div>
    </tag>
  );
}

Button.props = {
  ...routeProps,
  text: String,
  icon: String,
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button',
  },
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'normal',
  },
  loadingSize: {
    type: String,
    default: '20px',
  },
};

export default createComponent<ButtonProps, ButtonEvents>(Button);
