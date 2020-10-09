import { PropType, CSSProperties } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND, WHITE } from '../utils/constant';
import { useRoute, routeProps } from '../composition/use-route';

// Components
import Icon from '../icon';
import Loading, { LoadingType } from '../loading';

const [createComponent, bem] = createNamespace('button');

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export default createComponent({
  props: {
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
    loadingText: String,
    loadingType: String as PropType<LoadingType>,
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'button',
    },
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'normal',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    loadingSize: {
      type: String,
      default: '20px',
    },
    iconPosition: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
    },
  },

  emits: ['click'],

  setup(props, { emit, slots }) {
    const route = useRoute();

    const renderLoadingIcon = () => {
      if (slots.loading) {
        return slots.loading();
      }

      return (
        <Loading
          class={bem('loading')}
          size={props.loadingSize}
          type={props.loadingType}
          color="currentColor"
        />
      );
    };

    const renderIcon = () => {
      if (props.loading) {
        return renderLoadingIcon();
      }

      if (props.icon) {
        return (
          <Icon
            name={props.icon}
            class={bem('icon')}
            classPrefix={props.iconPrefix}
          />
        );
      }
    };

    const renderText = () => {
      let text;
      if (props.loading) {
        text = props.loadingText;
      } else {
        text = slots.default ? slots.default() : props.text;
      }

      if (text) {
        return <span class={bem('text')}>{text}</span>;
      }
    };

    const getStyle = () => {
      const { color, plain } = props;
      if (color) {
        const style: CSSProperties = {};

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

        return style;
      }
    };

    const onClick = (event: MouseEvent) => {
      if (!props.loading && !props.disabled) {
        emit('click', event);
        route();
      }
    };

    return () => {
      const {
        tag,
        type,
        size,
        block,
        round,
        plain,
        square,
        loading,
        disabled,
        hairline,
        nativeType,
        iconPosition,
      } = props;

      const classes = [
        bem([
          type,
          size,
          {
            plain,
            block,
            round,
            square,
            loading,
            disabled,
            hairline,
          },
        ]),
        { [BORDER_SURROUND]: hairline },
      ];

      return (
        <tag
          type={nativeType}
          class={classes}
          style={getStyle()}
          disabled={disabled}
          onClick={onClick}
        >
          <div class={bem('content')}>
            {iconPosition === 'left' && renderIcon()}
            {renderText()}
            {iconPosition === 'right' && renderIcon()}
          </div>
        </tag>
      );
    };
  },
});
