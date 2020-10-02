import { reactive, Teleport } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { DROPDOWN_KEY } from '../dropdown-menu';

// Composition
import { useParent } from '@vant/use';
import { useExpose } from '../composition/use-expose';

// Components
import Cell from '../cell';
import Icon from '../icon';
import Popup from '../popup';

const [createComponent, bem] = createNamespace('dropdown-item');

export default createComponent({
  props: {
    title: String,
    disabled: Boolean,
    teleport: [String, Object],
    modelValue: null,
    titleClass: String,
    options: {
      type: Array,
      default: () => [],
    },
    lazyRender: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const state = reactive({
      showPopup: false,
      transition: true,
      showWrapper: false,
    });

    const { parent } = useParent(DROPDOWN_KEY);

    const createEmitter = (eventName) => () => emit(eventName);
    const onOpen = createEmitter('open');
    const onClose = createEmitter('close');
    const onOpened = createEmitter('opened');

    const onClosed = () => {
      state.showWrapper = false;
      emit('closed');
    };

    const onClickWrapper = (event) => {
      // prevent being identified as clicking outside and closed when using teleport
      if (props.teleport) {
        event.stopPropagation();
      }
    };

    const toggle = (show = !state.showPopup, options = {}) => {
      if (show === state.showPopup) {
        return;
      }

      state.showPopup = show;
      state.transition = !options.immediate;

      if (show) {
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

      const match = props.options.filter(
        (option) => option.value === props.modelValue
      );

      return match.length ? match[0].text : '';
    };

    const renderOption = (option) => {
      const { activeColor } = parent.props;
      const active = option.value === props.modelValue;

      const onClick = () => {
        state.showPopup = false;

        if (option.value !== props.modelValue) {
          emit('update:modelValue', option.value);
          emit('change', option.value);
        }
      };

      return (
        <Cell
          clickable
          key={option.value}
          icon={option.icon}
          title={option.text}
          class={bem('option', { active })}
          style={{ color: active ? activeColor : '' }}
          onClick={onClick}
        >
          {active && (
            <Icon class={bem('icon')} color={activeColor} name="success" />
          )}
        </Cell>
      );
    };

    const renderContent = () => {
      const { offset } = parent;
      const {
        zIndex,
        overlay,
        duration,
        direction,
        closeOnClickOverlay,
      } = parent.props;

      const style = { zIndex };
      if (direction === 'down') {
        style.top = `${offset.value}px`;
      } else {
        style.bottom = `${offset.value}px`;
      }

      return (
        <div
          v-show={state.showWrapper}
          style={style}
          class={bem([direction])}
          onClick={onClickWrapper}
        >
          <Popup
            vModel={[state.showPopup, 'show']}
            class={bem('content')}
            overlay={overlay}
            position={direction === 'down' ? 'top' : 'bottom'}
            duration={state.transition ? duration : 0}
            lazyRender={props.lazyRender}
            overlayStyle={{ position: 'absolute' }}
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
