// Utils
import { createNamespace } from '../utils';

// Mixins
import { popupMixinProps } from '../mixins/popup';

// Components
import Icon from '../icon';
import Popup from '../popup';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('action-sheet');

export default createComponent({
  props: {
    ...popupMixinProps,
    title: String,
    actions: Array,
    duration: [Number, String],
    cancelText: String,
    description: String,
    getContainer: [String, Function],
    closeOnPopstate: Boolean,
    closeOnClickAction: Boolean,
    round: {
      type: Boolean,
      default: true,
    },
    closeIcon: {
      type: String,
      default: 'cross',
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },

  emits: [
    'open',
    'close',
    'opened',
    'closed',
    'cancel',
    'select',
    'update:show',
    'click-overlay',
  ],

  setup(props, { slots, emit }) {
    function onCancel() {
      emit('update:show', false);
      emit('cancel');
    }

    const createEmitter = (name) => () => emit(name);
    const listeners = {
      onOpen: createEmitter('open'),
      onClose: createEmitter('close'),
      onOpened: createEmitter('opened'),
      onClosed: createEmitter('closed'),
      'onClick-overlay': createEmitter('click-overlay'),
      'onUpdate:show': (show) => {
        emit('update:show', show);
      },
    };

    return function () {
      const { title, cancelText } = props;

      function Header() {
        if (title) {
          return (
            <div class={bem('header')}>
              {title}
              <Icon
                name={props.closeIcon}
                class={bem('close')}
                onClick={onCancel}
              />
            </div>
          );
        }
      }

      function Content() {
        if (slots.default) {
          return <div class={bem('content')}>{slots.default()}</div>;
        }
      }

      function Option(item, index) {
        const { disabled, loading, callback } = item;

        function onClickOption(event) {
          event.stopPropagation();

          if (disabled || loading) {
            return;
          }

          if (callback) {
            callback(item);
          }

          emit('select', item, index);

          if (props.closeOnClickAction) {
            emit('update:show', false);
          }
        }

        function OptionContent() {
          if (loading) {
            return <Loading size="20px" />;
          }

          return [
            <span class={bem('name')}>{item.name}</span>,
            item.subname && <span class={bem('subname')}>{item.subname}</span>,
          ];
        }

        return (
          <button
            type="button"
            class={[bem('item', { disabled, loading }), item.className]}
            style={{ color: item.color }}
            onClick={onClickOption}
          >
            {OptionContent()}
          </button>
        );
      }

      function CancelText() {
        if (cancelText) {
          return [
            <div class={bem('gap')} />,
            <button type="button" class={bem('cancel')} onClick={onCancel}>
              {cancelText}
            </button>,
          ];
        }
      }

      const Description = props.description && (
        <div class={bem('description')}>{props.description}</div>
      );

      return (
        <Popup
          class={bem()}
          position="bottom"
          show={props.show}
          round={props.round}
          overlay={props.overlay}
          duration={props.duration}
          lazyRender={props.lazyRender}
          lockScroll={props.lockScroll}
          getContainer={props.getContainer}
          closeOnPopstate={props.closeOnPopstate}
          closeOnClickOverlay={props.closeOnClickOverlay}
          safeAreaInsetBottom={props.safeAreaInsetBottom}
          {...listeners}
        >
          {Header()}
          {Description}
          {props.actions && props.actions.map(Option)}
          {Content()}
          {CancelText()}
        </Popup>
      );
    };
  },
});
