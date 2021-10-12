import {
  ref,
  watch,
  nextTick,
  PropType,
  onMounted,
  CSSProperties,
  TeleportProps,
  onBeforeUnmount,
  defineComponent,
} from 'vue';
import { Instance, createPopper, offsetModifier } from '@vant/popperjs';

// Utils
import {
  pick,
  extend,
  truthProp,
  numericProp,
  unknownProp,
  BORDER_BOTTOM,
  makeStringProp,
  createNamespace,
  ComponentInstance,
  makeArrayProp,
} from '../utils';

// Composables
import { useClickAway } from '@vant/use';

// Components
import { Icon } from '../icon';
import { Popup } from '../popup';

const [name, bem] = createNamespace('popover');

const popupProps = [
  'show',
  'overlay',
  'duration',
  'teleport',
  'overlayStyle',
  'overlayClass',
  'closeOnClickOverlay',
] as const;

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
  text: string;
  icon?: string;
  color?: string;
  disabled?: boolean;
  className?: string;
  [key: PropertyKey]: any;
};

export default defineComponent({
  name,

  props: {
    show: Boolean,
    theme: makeStringProp<PopoverTheme>('light'),
    overlay: Boolean,
    actions: makeArrayProp<PopoverAction>(),
    trigger: makeStringProp<PopoverTrigger>('click'),
    duration: numericProp,
    showArrow: truthProp,
    placement: makeStringProp<PopoverPlacement>('bottom'),
    iconPrefix: String,
    overlayClass: unknownProp,
    overlayStyle: Object as PropType<CSSProperties>,
    closeOnClickAction: truthProp,
    closeOnClickOverlay: truthProp,
    closeOnClickOutside: truthProp,
    offset: {
      type: Array as unknown as PropType<[number, number]>,
      default: () => [0, 8],
    },
    teleport: {
      type: [String, Object] as PropType<TeleportProps['to']>,
      default: 'body',
    },
  },

  emits: ['select', 'touchstart', 'update:show'],

  setup(props, { emit, slots, attrs }) {
    let popper: Instance | null;

    const wrapperRef = ref<HTMLElement>();
    const popoverRef = ref<ComponentInstance>();

    const createPopperInstance = () => {
      if (wrapperRef.value && popoverRef.value) {
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
            extend({}, offsetModifier, {
              options: {
                offset: props.offset,
              },
            }),
          ],
        });
      }
      return null;
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

    const updateShow = (value: boolean) => emit('update:show', value);

    const onClickWrapper = () => {
      if (props.trigger === 'click') {
        updateShow(!props.show);
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
        updateShow(false);
      }
    };

    const onClickAway = () => {
      if (
        props.closeOnClickOutside &&
        (!props.overlay || props.closeOnClickOverlay)
      ) {
        updateShow(false);
      }
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
          {icon && (
            <Icon
              name={icon}
              classPrefix={props.iconPrefix}
              class={bem('action-icon')}
            />
          )}
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

    watch(() => [props.show, props.placement], updateLocation);

    useClickAway(wrapperRef, onClickAway, { eventName: 'touchstart' });

    return () => (
      <>
        <span ref={wrapperRef} class={bem('wrapper')} onClick={onClickWrapper}>
          {slots.reference?.()}
        </span>
        <Popup
          ref={popoverRef}
          class={bem([props.theme])}
          position={''}
          transition="van-popover-zoom"
          lockScroll={false}
          onTouchstart={onTouchstart}
          onUpdate:show={updateShow}
          {...attrs}
          {...pick(props, popupProps)}
        >
          {props.showArrow && <div class={bem('arrow')} />}
          <div role="menu" class={bem('content')}>
            {slots.default ? slots.default() : props.actions.map(renderAction)}
          </div>
        </Popup>
      </>
    );
  },
});
