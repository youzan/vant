import {
  watch,
  PropType,
  onMounted,
  onUnmounted,
  CSSProperties,
  defineComponent,
} from 'vue';

// Utils
import {
  pick,
  isDef,
  unknownProp,
  numericProp,
  makeStringProp,
  makeNumberProp,
  createNamespace,
} from '../utils';
import { lockClick } from './lock-click';

// Components
import { Icon } from '../icon';
import { Popup } from '../popup';
import { Loading, LoadingType } from '../loading';

// Types
import type { ToastType, ToastPosition } from './types';

const [name, bem] = createNamespace('toast');

const popupProps = [
  'show',
  'overlay',
  'transition',
  'overlayClass',
  'overlayStyle',
  'closeOnClickOverlay',
] as const;

export default defineComponent({
  name,

  props: {
    icon: String,
    show: Boolean,
    type: makeStringProp<ToastType>('text'),
    overlay: Boolean,
    message: numericProp,
    iconSize: numericProp,
    duration: makeNumberProp(2000),
    position: makeStringProp<ToastPosition>('middle'),
    className: unknownProp,
    iconPrefix: String,
    transition: makeStringProp('van-fade'),
    loadingType: String as PropType<LoadingType>,
    forbidClick: Boolean,
    overlayClass: unknownProp,
    overlayStyle: Object as PropType<CSSProperties>,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
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

    const updateShow = (show: boolean) => emit('update:show', show);

    const onClick = () => {
      if (props.closeOnClick) {
        updateShow(false);
      }
    };

    const clearTimer = () => clearTimeout(timer);

    const renderIcon = () => {
      const { icon, type, iconSize, iconPrefix, loadingType } = props;
      const hasIcon = icon || type === 'success' || type === 'fail';

      if (hasIcon) {
        return (
          <Icon
            name={icon || type}
            size={iconSize}
            class={bem('icon')}
            classPrefix={iconPrefix}
          />
        );
      }

      if (type === 'loading') {
        return (
          <Loading class={bem('loading')} size={iconSize} type={loadingType} />
        );
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

    watch(() => [props.show, props.forbidClick], toggleClickable);

    watch(
      () => [props.show, props.type, props.message, props.duration],
      () => {
        clearTimer();
        if (props.show && props.duration > 0) {
          timer = setTimeout(() => {
            updateShow(false);
          }, props.duration);
        }
      }
    );

    onMounted(toggleClickable);
    onUnmounted(toggleClickable);

    return () => (
      <Popup
        class={[
          bem([props.position, { [props.type]: !props.icon }]),
          props.className,
        ]}
        lockScroll={false}
        onClick={onClick}
        onClosed={clearTimer}
        onUpdate:show={updateShow}
        {...pick(props, popupProps)}
      >
        {renderIcon()}
        {renderMessage()}
      </Popup>
    );
  },
});
