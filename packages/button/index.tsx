import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import { routeProps, RouteProps, functionalRoute } from '../utils/router';
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
  block?: boolean;
  plain?: boolean;
  round?: boolean;
  square?: boolean;
  loading?: boolean;
  hairline?: boolean;
  disabled?: boolean;
  nativeType?: string;
  loadingSize: string;
  loadingType?: LoadingType;
  loadingText?: string;
};

export type ButtonEvents = {
  onClick?(event: Event): void;
};

const [sfc, bem] = use('button');

function Button(
  h: CreateElement,
  props: ButtonProps,
  slots: DefaultSlots,
  ctx: RenderContext<ButtonProps>
) {
  const { tag, icon, type, disabled, loading, hairline, loadingText } = props;

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
        disabled,
        hairline,
        block: props.block,
        plain: props.plain,
        round: props.round,
        square: props.square
      }
    ]),
    { 'van-hairline--surround': hairline }
  ];

  function Content() {
    const content = [];

    if (loading) {
      content.push(
        <Loading
          class={bem('loading')}
          size={props.loadingSize}
          type={props.loadingType}
          color={type === 'default' ? undefined : ''}
        />
      );
    } else if (icon) {
      content.push(<Icon name={icon} class={bem('icon')} />);
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
      class={classes}
      type={props.nativeType}
      disabled={disabled}
      onClick={onClick}
      onTouchstart={onTouchstart}
      {...inherit(ctx)}
    >
      {Content()}
    </tag>
  );
}

Button.props = {
  ...routeProps,
  text: String,
  icon: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
};

export default sfc<ButtonProps, ButtonEvents>(Button);
