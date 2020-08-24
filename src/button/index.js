// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND, WHITE } from '../utils/constant';
import { routeProps, route } from '../utils/router';

// Components
import Icon from '../icon';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('button');

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
  },

  emits: ['click'],

  setup(props, { emit, slots }) {
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
        const style = {};

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

    return (vm) => {
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
      } = props;

      const onClick = () => {
        if (!loading && !disabled) {
          emit('click', event);
          route(vm.$router, vm);
        }
      };

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
            {renderIcon()}
            {renderText()}
          </div>
        </tag>
      );
    };
  },
});
