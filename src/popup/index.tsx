// Utils
import {
  ref,
  watch,
  Teleport,
  computed,
  PropType,
  onMounted,
  Transition,
  onActivated,
  CSSProperties,
  TeleportProps,
  onDeactivated,
  onBeforeUnmount,
} from 'vue';
import { createNamespace, isDef } from '../utils';

// Composition
import { useEventListener } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLockScroll } from '../composables/use-lock-scroll';
import { useLazyRender } from '../composables/use-lazy-render';

// Components
import Icon from '../icon';
import Overlay from '../overlay';

export type PopupCloseIconPosition =
  | 'top-left'
  | 'top-right'
  | 'botttom-left'
  | 'bottom-right';

const [createComponent, bem] = createNamespace('popup');

let globalZIndex = 2000;

export const popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: [Number, String],
  // transition duration
  duration: [Number, String],
  // teleport
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: null,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to show overlay
  overlay: {
    type: Boolean,
    default: true,
  },
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true,
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true,
  },
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
};

export default createComponent({
  inheritAttrs: false,

  props: {
    ...popupSharedProps,
    round: Boolean,
    closeable: Boolean,
    transition: String,
    closeOnPopstate: Boolean,
    safeAreaInsetBottom: Boolean,
    position: {
      type: String,
      default: 'center',
    },
    closeIcon: {
      type: String,
      default: 'cross',
    },
    closeIconPosition: {
      type: String as PropType<PopupCloseIconPosition>,
      default: 'top-right',
    },
  },

  emits: [
    'open',
    'close',
    'click',
    'opened',
    'closed',
    'update:show',
    'click-overlay',
    'click-close-icon',
  ],

  setup(props, { emit, attrs, slots }) {
    let opened: boolean;
    let shouldReopen: boolean;

    const zIndex = ref<number>();
    const popupRef = ref<HTMLElement>();

    const [lockScroll, unlockScroll] = useLockScroll(
      popupRef,
      () => props.lockScroll
    );

    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);

    const style = computed(() => {
      const style: CSSProperties = {
        zIndex: zIndex.value,
      };

      if (isDef(props.duration)) {
        const key =
          props.position === 'center'
            ? 'animationDuration'
            : 'transitionDuration';
        style[key] = `${props.duration}s`;
      }

      return style;
    });

    const open = () => {
      if (!opened) {
        if (props.zIndex !== undefined) {
          globalZIndex = +props.zIndex;
        }

        opened = true;
        lockScroll();
        zIndex.value = ++globalZIndex;
      }
    };

    const close = () => {
      if (opened) {
        opened = false;
        unlockScroll();
        emit('update:show', false);
      }
    };

    const onClickOverlay = (event: MouseEvent) => {
      emit('click-overlay', event);

      if (props.closeOnClickOverlay) {
        close();
      }
    };

    const renderOverlay = () => {
      if (props.overlay) {
        return (
          <Overlay
            show={props.show}
            class={props.overlayClass}
            zIndex={zIndex.value}
            duration={props.duration}
            customStyle={props.overlayStyle}
            onClick={onClickOverlay}
          />
        );
      }
    };

    const onClickCloseIcon = (event: MouseEvent) => {
      emit('click-close-icon', event);
      close();
    };

    const renderCloseIcon = () => {
      if (props.closeable) {
        return (
          <Icon
            role="button"
            tabindex={0}
            name={props.closeIcon}
            class={bem('close-icon', props.closeIconPosition)}
            onClick={onClickCloseIcon}
          />
        );
      }
    };

    const onClick = (event: MouseEvent) => emit('click', event);
    const onOpened = () => emit('opened');
    const onClosed = () => emit('closed');

    const renderPopup = lazyRender(() => {
      const { round, position, safeAreaInsetBottom } = props;
      return (
        <div
          v-show={props.show}
          ref={popupRef}
          style={style.value}
          class={bem({
            round,
            [position]: position,
            'safe-area-inset-bottom': safeAreaInsetBottom,
          })}
          onClick={onClick}
          {...attrs}
        >
          {slots.default?.()}
          {renderCloseIcon()}
        </div>
      );
    });

    const renderTransition = () => {
      const { position, transition, transitionAppear } = props;
      const name =
        position === 'center' ? 'van-fade' : `van-popup-slide-${position}`;

      return (
        <Transition
          name={transition || name}
          appear={transitionAppear}
          onAfterEnter={onOpened}
          onAfterLeave={onClosed}
        >
          {renderPopup()}
        </Transition>
      );
    };

    watch(
      () => props.show,
      (value) => {
        if (value) {
          open();
          emit('open');
        } else {
          close();
          emit('close');
        }
      }
    );

    useExpose({ popupRef });

    useEventListener('popstate', () => {
      if (props.closeOnPopstate) {
        close();
        shouldReopen = false;
      }
    });

    onMounted(() => {
      if (props.show) {
        open();
      }
    });

    onActivated(() => {
      if (shouldReopen) {
        emit('update:show', true);
        shouldReopen = false;
      }
    });

    onDeactivated(() => {
      if (props.show) {
        close();
        shouldReopen = true;
      }
    });

    onBeforeUnmount(() => {
      if (opened) {
        unlockScroll();
      }
    });

    return () => {
      if (props.teleport) {
        return (
          <Teleport to={props.teleport}>
            {renderOverlay()}
            {renderTransition()}
          </Teleport>
        );
      }

      return (
        <>
          {renderOverlay()}
          {renderTransition()}
        </>
      );
    };
  },
});
