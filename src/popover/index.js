import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { createPopper, offsetModifier } from '@vant/popperjs';

// Utils
import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';

// Composition
import { useClickAway } from '@vant/use';

// Components
import Icon from '../icon';
import Popup from '../popup';

const [createComponent, bem] = createNamespace('popover');

export default createComponent({
  props: {
    show: Boolean,
    overlay: Boolean,
    offset: {
      type: Array,
      default: () => [0, 8],
    },
    theme: {
      type: String,
      default: 'light',
    },
    trigger: {
      type: String,
      default: 'click',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    teleport: {
      type: [String, Object],
      default: 'body',
    },
    closeOnClickAction: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['select', 'touchstart', 'update:show'],

  setup(props, { emit, slots, attrs }) {
    let popper;
    const wrapperRef = ref();
    const popoverRef = ref();

    const createPopperInstance = () => {
      return createPopper(wrapperRef.value, popoverRef.value.popupRef.value, {
        placement: props.placement,
        modifiers: [
          {
            name: 'computeStyles',
            options: {
              adaptive: false,
              gpuAcceleration: false,
            },
          },
          {
            ...offsetModifier,
            options: {
              offset: props.offset,
            },
          },
        ],
      });
    };

    const updateLocation = () => {
      nextTick(() => {
        if (!props.show) {
          return;
        }

        if (!popper) {
          popper = createPopperInstance();
        } else {
          popper.setOptions({
            placement: props.placement,
          });
        }
      });
    };

    const toggle = (value) => {
      emit('update:show', value);
    };

    const onClickWrapper = () => {
      if (props.trigger === 'click') {
        toggle(!props.show);
      }
    };

    const onTouchstart = (event) => {
      event.stopPropagation();
      emit('touchstart', event);
    };

    const onClickAction = (action, index) => {
      if (action.disabled) {
        return;
      }

      emit('select', action, index);

      if (props.closeOnClickAction) {
        toggle(false);
      }
    };

    const onClickAway = () => {
      toggle(false);
    };

    const renderAction = (action, index) => {
      const { icon, text, disabled, className } = action;
      return (
        <div
          role="menuitem"
          class={[bem('action', { disabled, 'with-icon': icon }), className]}
          onClick={() => onClickAction(action, index)}
        >
          {icon && <Icon name={icon} class={bem('action-icon')} />}
          <div class={[bem('action-text'), BORDER_BOTTOM]}>{text}</div>
        </div>
      );
    };

    onMounted(updateLocation);
    onBeforeUnmount(() => {
      if (popper) {
        popper.destroy();
        popper = null;
      }
    });

    watch([() => props.show, () => props.placement], updateLocation);

    useClickAway(wrapperRef, onClickAway, { eventName: 'touchstart' });

    return () => (
      <>
        <span ref={wrapperRef} class={bem('wrapper')} onClick={onClickWrapper}>
          {slots.reference?.()}
        </span>
        <Popup
          ref={popoverRef}
          show={props.show}
          class={bem([props.theme])}
          overlay={props.overlay}
          position={null}
          teleport={props.teleport}
          transition="van-popover-zoom"
          lockScroll={false}
          onTouchstart={onTouchstart}
          {...{ ...attrs, 'onUpdate:show': toggle }}
        >
          <div class={bem('arrow')} />
          <div role="menu" class={bem('content')}>
            {slots.default ? slots.default() : props.actions.map(renderAction)}
          </div>
        </Popup>
      </>
    );
  },
});
