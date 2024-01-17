import {
  watch,
  onMounted,
  onUnmounted,
  defineComponent,
  type PropType,
  type TeleportProps,
  type CSSProperties,
  type ExtractPropTypes,
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
import type { ToastType, ToastPosition, ToastWordBreak } from './types';

const [name, bem] = createNamespace('toast');

const popupInheritProps = [
  'show',
  'overlay',
  'teleport',
  'transition',
  'overlayClass',
  'overlayStyle',
  'closeOnClickOverlay',
  'zIndex',
] as const;

export const toastProps = {
  icon: String,
  show: Boolean,
  type: makeStringProp<ToastType>('text'),
  overlay: Boolean,
  message: numericProp,
  iconSize: numericProp,
  duration: makeNumberProp(2000),
  position: makeStringProp<ToastPosition>('middle'),
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  wordBreak: String as PropType<ToastWordBreak>,
  className: unknownProp,
  iconPrefix: String,
  transition: makeStringProp('van-fade'),
  loadingType: String as PropType<LoadingType>,
  forbidClick: Boolean,
  overlayClass: unknownProp,
  overlayStyle: Object as PropType<CSSProperties>,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean,
  zIndex: numericProp,
};

export type ToastProps = ExtractPropTypes<typeof toastProps>;

export default defineComponent({
  name,

  props: toastProps,

  emits: ['update:show'],

  setup(props, { emit, slots }) {
    let timer: ReturnType<typeof setTimeout>;
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

      if (slots.message) {
        return <div class={bem('text')}>{slots.message()}</div>;
      }

      if (isDef(message) && message !== '') {
        return type === 'html' ? (
          <div key={0} class={bem('text')} innerHTML={String(message)} />
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
      },
    );

    onMounted(toggleClickable);
    onUnmounted(toggleClickable);

    return () => (
      <Popup
        class={[
          bem([
            props.position,
            props.wordBreak === 'normal' ? 'break-normal' : props.wordBreak,
            { [props.type]: !props.icon },
          ]),
          props.className,
        ]}
        lockScroll={false}
        onClick={onClick}
        onClosed={clearTimer}
        onUpdate:show={updateShow}
        {...pick(props, popupInheritProps)}
      >
        {renderIcon()}
        {renderMessage()}
      </Popup>
    );
  },
});
