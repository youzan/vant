import {
  ref,
  watch,
  nextTick,
  PropType,
  onMounted,
  TeleportProps,
  onBeforeUnmount,
} from 'vue';
import { Instance, createPopper, offsetModifier } from '@vant/popperjs';

// Utils
import { ComponentInstance, createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';

// Composition
import { useClickAway } from '@vant/use';

// Components
import Icon from '../icon';
import Popup from '../popup';

const [createComponent, bem] = createNamespace('popover');

export type PopoverTheme = 'light' | 'dark';
export type PopoverTrigger = 'manual' | 'click';
export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export type PopoverAction = {
  icon?: string;
  text: string;
  color?: string;
  disabled?: boolean;
  className?: string;
};

export default createComponent({
  props: {
    show: Boolean,
    overlay: Boolean,
    offset: {
      type: (Array as unknown) as PropType<[number, number]>,
      default: () => [0, 8],
    },
    theme: {
      type: String as PropType<PopoverTheme>,
      default: 'light',
    },
    trigger: {
      type: String as PropType<PopoverTrigger>,
      default: 'click',
    },
    actions: {
      type: Array as PropType<PopoverAction[]>,
      default: () => [],
    },
    placement: {
      type: String as PropType<PopoverPlacement>,
      default: 'bottom',
    },
    teleport: {
      type: [String, Object] as PropType<TeleportProps['to']>,
      default: 'body',
    },
    closeOnClickAction: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['select', 'touchstart', 'update:show'],

  setup(props, { emit, slots, attrs }) {
    let popper: Instance | null;

    const wrapperRef = ref<HTMLElement>();
    const popoverRef = ref<ComponentInstance>();

    const createPopperInstance = () => {
      return createPopper(wrapperRef.value!, popoverRef.value!.popupRef.value, {
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

    const toggle = (value: boolean) => {
      emit('update:show', value);
    };

    const onClickWrapper = () => {
      if (props.trigger === 'click') {
        toggle(!props.show);
      }
    };

    const onTouchstart = (event: TouchEvent) => {
      event.stopPropagation();
      emit('touchstart', event);
    };

    const onClickAction = (action: PopoverAction, index: number) => {
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

    const renderAction = (action: PopoverAction, index: number) => {
      const { icon, text, color, disabled, className } = action;
      return (
        <div
          role="menuitem"
          class={[bem('action', { disabled, 'with-icon': icon }), className]}
          style={{ color }}
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
          position={''}
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
