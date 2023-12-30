import {
  reactive,
  Teleport,
  defineComponent,
  ref,
  type PropType,
  type TeleportProps,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  truthProp,
  unknownProp,
  getZIndexStyle,
  createNamespace,
  makeArrayProp,
  getContainingBlock,
} from '../utils';
import { DROPDOWN_KEY } from '../dropdown-menu/DropdownMenu';

// Composables
import { useParent, useRect } from '@vant/use';
import { useExpose } from '../composables/use-expose';

// Components
import { Cell } from '../cell';
import { Icon } from '../icon';
import { Popup } from '../popup';

// Types
import type { DropdownItemOption } from './types';

const [name, bem] = createNamespace('dropdown-item');

export const dropdownItemProps = {
  title: String,
  options: makeArrayProp<DropdownItemOption>(),
  disabled: Boolean,
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  lazyRender: truthProp,
  modelValue: unknownProp,
  titleClass: unknownProp,
};

export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>;

export default defineComponent({
  name,

  inheritAttrs: false,

  props: dropdownItemProps,

  emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue'],

  setup(props, { emit, slots, attrs }) {
    const state = reactive({
      showPopup: false,
      transition: true,
      showWrapper: false,
    });
    const wrapperRef = ref<HTMLElement>();

    const { parent, index } = useParent(DROPDOWN_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[Vant] <DropdownItem> must be a child component of <DropdownMenu>.',
        );
      }
      return;
    }

    const getEmitter = (name: 'open' | 'close' | 'opened') => () => emit(name);
    const onOpen = getEmitter('open');
    const onClose = getEmitter('close');
    const onOpened = getEmitter('opened');

    const onClosed = () => {
      state.showWrapper = false;
      emit('closed');
    };

    const onClickWrapper = (event: MouseEvent) => {
      // prevent being identified as clicking outside and closed when using teleport
      if (props.teleport) {
        event.stopPropagation();
      }
    };

    const toggle = (
      show = !state.showPopup,
      options: { immediate?: boolean } = {},
    ) => {
      if (show === state.showPopup) {
        return;
      }

      state.showPopup = show;
      state.transition = !options.immediate;

      if (show) {
        parent.updateOffset();
        state.showWrapper = true;
      }
    };

    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }

      if (props.title) {
        return props.title;
      }

      const match = props.options.find(
        (option) => option.value === props.modelValue,
      );

      return match ? match.text : '';
    };

    const renderOption = (option: DropdownItemOption) => {
      const { activeColor } = parent.props;
      const active = option.value === props.modelValue;

      const onClick = () => {
        state.showPopup = false;

        if (option.value !== props.modelValue) {
          emit('update:modelValue', option.value);
          emit('change', option.value);
        }
      };

      const renderIcon = () => {
        if (active) {
          return (
            <Icon class={bem('icon')} color={activeColor} name="success" />
          );
        }
      };

      return (
        <Cell
          v-slots={{ value: renderIcon }}
          role="menuitem"
          key={String(option.value)}
          icon={option.icon}
          title={option.text}
          class={bem('option', { active })}
          style={{ color: active ? activeColor : '' }}
          tabindex={active ? 0 : -1}
          clickable
          onClick={onClick}
        />
      );
    };

    const renderContent = () => {
      const { offset } = parent;
      const {
        autoLocate,
        zIndex,
        overlay,
        duration,
        direction,
        closeOnClickOverlay,
      } = parent.props;
      const style: CSSProperties = getZIndexStyle(zIndex);
      let offsetValue = offset.value;

      if (autoLocate && wrapperRef.value) {
        const offsetParent = getContainingBlock(wrapperRef.value);

        if (offsetParent) {
          offsetValue -= useRect(offsetParent).top;
        }
      }

      if (direction === 'down') {
        style.top = `${offsetValue}px`;
      } else {
        style.bottom = `${offsetValue}px`;
      }

      return (
        <div
          v-show={state.showWrapper}
          ref={wrapperRef}
          style={style}
          class={bem([direction])}
          onClick={onClickWrapper}
          {...attrs}
        >
          <Popup
            v-model:show={state.showPopup}
            role="menu"
            class={bem('content')}
            overlay={overlay}
            position={direction === 'down' ? 'top' : 'bottom'}
            duration={state.transition ? duration : 0}
            lazyRender={props.lazyRender}
            overlayStyle={{ position: 'absolute' }}
            aria-labelledby={`${parent.id}-${index.value}`}
            closeOnClickOverlay={closeOnClickOverlay}
            onOpen={onOpen}
            onClose={onClose}
            onOpened={onOpened}
            onClosed={onClosed}
          >
            {props.options.map(renderOption)}
            {slots.default?.()}
          </Popup>
        </div>
      );
    };

    useExpose({ state, toggle, renderTitle });

    return () => {
      if (props.teleport) {
        return <Teleport to={props.teleport}>{renderContent()}</Teleport>;
      }
      return renderContent();
    };
  },
});
