// Utils
import {
  ref,
  watch,
  Teleport,
  computed,
  onMounted,
  Transition,
  onActivated,
  onBeforeMount,
  onDeactivated,
} from 'vue';
import { createNamespace, isDef } from '../utils';

// Composition
import { useEventListener } from '@vant/use';
import { useLockScroll } from '../composition/use-lock-scroll';
import { useLazyRender } from '../composition/use-lazy-render';

// Components
import Icon from '../icon';
import Overlay from '../overlay';

const [createComponent, bem] = createNamespace('popup');

const context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],
  find(vm) {
    return this.stack.filter((item) => item.vm === vm)[0];
  },
};

export const popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: [Number, String],
  // transition duration
  duration: [Number, String],
  // teleport
  teleport: [String, Object],
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
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
  // whether to close popup when click overlay
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
      type: String,
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
  ],

  setup(props, { emit, attrs, slots }) {
    let opened;
    let shouldReopen;

    const zIndex = ref();

    const [lockScroll, unlockScroll] = useLockScroll(() => props.lockScroll);

    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);

    const style = computed(() => {
      const style = {
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
          context.zIndex = props.zIndex;
        }

        opened = true;
        lockScroll();
        zIndex.value = ++context.zIndex;
      }
    };

    const close = () => {
      if (opened) {
        opened = false;
        unlockScroll();
        emit('update:show', false);
      }
    };

    const onClickOverlay = () => {
      emit('click-overlay');
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
            style={props.overlayStyle}
            zIndex={zIndex.value}
            duration={props.duration}
            onClick={onClickOverlay}
          />
        );
      }
    };

    const renderCloseIcon = () => {
      if (props.closeable) {
        return (
          <Icon
            role="button"
            tabindex="0"
            name={props.closeIcon}
            class={bem('close-icon', props.closeIconPosition)}
            onClick={close}
          />
        );
      }
    };

    const onClick = (event) => emit('click', event);
    const onOpened = () => emit('opened');
    const onClosed = () => emit('closed');

    const renderPopup = lazyRender(() => {
      const { round, position, safeAreaInsetBottom } = props;
      return (
        <div
          v-show={props.show}
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
      const { position, transition } = props;
      const name =
        position === 'center' ? 'van-fade' : `van-popup-slide-${position}`;

      return (
        <Transition
          name={transition || name}
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

    onBeforeMount(() => {
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
