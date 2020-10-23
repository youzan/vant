import { watch, onMounted, onUnmounted } from 'vue';

// Utils
import { createNamespace, isDef } from '../utils';
import { lockClick } from './lock-click';

// Components
import Icon from '../icon';
import Popup from '../popup';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('toast');

export default createComponent({
  props: {
    icon: String,
    show: Boolean,
    message: [Number, String],
    duration: Number,
    className: null,
    iconPrefix: String,
    lockScroll: Boolean,
    loadingType: String,
    forbidClick: Boolean,
    closeOnClick: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    position: {
      type: String,
      default: 'middle',
    },
    transition: {
      type: String,
      default: 'van-fade',
    },
  },

  emits: ['update:show'],

  setup(props, { emit }) {
    let timer;
    let clickable = false;

    const toggleClickable = () => {
      const newValue = props.show && props.forbidClick;
      if (clickable !== newValue) {
        clickable = newValue;
        lockClick(clickable);
      }
    };

    const onClick = () => {
      if (props.closeOnClick) {
        emit('update:show', false);
      }
    };

    const clearTimer = () => {
      clearTimeout(timer);
    };

    const renderIcon = () => {
      const { icon, type, iconPrefix, loadingType } = props;
      const hasIcon = icon || type === 'success' || type === 'fail';

      if (hasIcon) {
        return (
          <Icon
            name={icon || type}
            class={bem('icon')}
            classPrefix={iconPrefix}
          />
        );
      }

      if (type === 'loading') {
        return <Loading class={bem('loading')} type={loadingType} />;
      }
    };

    const renderMessage = () => {
      const { type, message } = props;

      if (isDef(message) && message !== '') {
        return type === 'html' ? (
          <div class={bem('text')} innerHTML={message} />
        ) : (
          <div class={bem('text')}>{message}</div>
        );
      }
    };

    watch([() => props.show, () => props.forbidClick], toggleClickable);

    watch([() => props.show, () => props.duration], () => {
      clearTimer();
      if (props.show && props.duration > 0) {
        timer = setTimeout(() => {
          emit('update:show', false);
        }, props.duration);
      }
    });

    onMounted(toggleClickable);
    onUnmounted(toggleClickable);

    return () => (
      <Popup
        show={props.show}
        class={[
          bem([props.position, { [props.type]: !props.icon }]),
          props.className,
        ]}
        lockScroll={false}
        transition={props.transition}
        onClick={onClick}
        onClosed={clearTimer}
      >
        {renderIcon()}
        {renderMessage()}
      </Popup>
    );
  },
});
