import { watch, PropType, onMounted, onUnmounted, CSSProperties } from 'vue';

// Utils
import { createNamespace, isDef, UnknownProp } from '../utils';
import { lockClick } from './lock-click';

// Components
import Icon from '../icon';
import Popup from '../popup';
import Loading, { LoadingType } from '../loading';

const [createComponent, bem] = createNamespace('toast');

export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
export type ToastPosition = 'top' | 'middle' | 'bottom';

export default createComponent({
  props: {
    icon: String,
    show: Boolean,
    message: [Number, String],
    className: UnknownProp,
    iconPrefix: String,
    lockScroll: Boolean,
    loadingType: String as PropType<LoadingType>,
    forbidClick: Boolean,
    overlayClass: UnknownProp,
    overlayStyle: Object as PropType<CSSProperties>,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    type: {
      type: String as PropType<ToastType>,
      default: 'text',
    },
    duration: {
      type: Number,
      default: 2000,
    },
    position: {
      type: String as PropType<ToastPosition>,
      default: 'middle',
    },
    transition: {
      type: String,
      default: 'van-fade',
    },
  },

  emits: ['update:show'],

  setup(props, { emit }) {
    let timer: NodeJS.Timeout;
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

    const toggle = (show: boolean) => {
      emit('update:show', show);
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
          <div class={bem('text')} innerHTML={String(message)} />
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
        overlayClass={props.overlayClass}
        overlayStyle={props.overlayStyle}
        closeOnClickOverlay={props.closeOnClickOverlay}
        onClick={onClick}
        onClosed={clearTimer}
        {...{ 'onUpdate:show': toggle }}
      >
        {renderIcon()}
        {renderMessage()}
      </Popup>
    );
  },
});
