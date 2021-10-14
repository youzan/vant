import {
  ref,
  watch,
  provide,
  Teleport,
  computed,
  onMounted,
  Transition,
  onActivated,
  CSSProperties,
  onDeactivated,
  defineComponent,
} from 'vue';

// Utils
import { popupSharedProps } from './shared';
import {
  isDef,
  extend,
  makeStringProp,
  callInterceptor,
  createNamespace,
} from '../utils';

// Composables
import { useEventListener } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLockScroll } from '../composables/use-lock-scroll';
import { useLazyRender } from '../composables/use-lazy-render';
import { POPUP_TOGGLE_KEY } from '../composables/on-popup-reopen';

// Components
import { Icon } from '../icon';
import { Overlay } from '../overlay';

export type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | '';

export type PopupCloseIconPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

const [name, bem] = createNamespace('popup');

let globalZIndex = 2000;

export default defineComponent({
  name,

  inheritAttrs: false,

  props: extend({}, popupSharedProps, {
    round: Boolean,
    position: makeStringProp<PopupPosition>('center'),
    closeIcon: makeStringProp('cross'),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: makeStringProp<PopupCloseIconPosition>('top-right'),
    safeAreaInsetBottom: Boolean,
  }),

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
        zIndex.value = ++globalZIndex;

        emit('open');
      }
    };

    const close = () => {
      if (opened) {
        callInterceptor(props.beforeClose, {
          done() {
            opened = false;
            emit('close');
            emit('update:show', false);
          },
        });
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
            v-slots={{ default: slots['overlay-content'] }}
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
            classPrefix={props.iconPrefix}
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
          class={[
            bem({
              round,
              [position]: position,
            }),
            { 'van-safe-area-bottom': safeAreaInsetBottom },
          ]}
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
          v-slots={{ default: renderPopup }}
          name={transition || name}
          appear={transitionAppear}
          onAfterEnter={onOpened}
          onAfterLeave={onClosed}
        />
      );
    };

    watch(
      () => props.show,
      (value) => {
        if (value) {
          open();
        } else {
          opened = false;
          emit('close');
        }
      }
    );

    useExpose({ popupRef });

    useLockScroll(popupRef, () => props.show && props.lockScroll);

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

    provide(POPUP_TOGGLE_KEY, () => props.show);

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
