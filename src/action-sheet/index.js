// Utils
import { createNamespace } from '../utils';

// Components
import Icon from '../icon';
import Popup, { popupSharedProps } from '../popup';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('action-sheet');

function Header({ title, closeIcon, onCancel }) {
  if (title) {
    return (
      <div class={bem('header')}>
        {title}
        <Icon name={closeIcon} class={bem('close')} onClick={onCancel} />
      </div>
    );
  }
}

function Option({ item }) {
  const { name, color, subname, loading, disabled, className } = item;

  const Content = loading ? (
    <Loading class={bem('loading-icon')} />
  ) : (
    [
      <span class={bem('name')}>{name}</span>,
      subname && <div class={bem('subname')}>{subname}</div>,
    ]
  );

  return (
    <button
      type="button"
      style={{ color }}
      class={[bem('item', { loading, disabled }), className]}
    >
      {Content}
    </button>
  );
}

function CancelText({ cancelText, onCancel }) {
  if (cancelText) {
    return [
      <div class={bem('gap')} />,
      <button type="button" class={bem('cancel')} onClick={onCancel}>
        {cancelText}
      </button>,
    ];
  }
}

export default createComponent({
  props: {
    ...popupSharedProps,
    title: String,
    actions: Array,
    duration: [Number, String],
    teleport: [String, Object],
    cancelText: String,
    description: String,
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

  emits: ['select', 'cancel', 'update:show'],

  setup(props, { slots, emit }) {
    function onUpdateShow(show) {
      emit('update:show', show);
    }

    function onCancel() {
      onUpdateShow(false);
      emit('cancel');
    }

    return function () {
      const {
        title,
        actions,
        closeIcon,
        cancelText,
        description,
        closeOnClickAction,
        ...restProps
      } = props;

      const Content = slots.default && (
        <div class={bem('content')}>{slots.default()}</div>
      );

      const Description = description && (
        <div class={bem('description')}>{description}</div>
      );

      const Options =
        actions &&
        actions.map((item, index) => (
          <Option
            item={item}
            onClick={() => {
              emit('select', item, index);

              if (closeOnClickAction) {
                emit('update:show', false);
              }
            }}
          />
        ));

      return (
        <Popup
          class={bem()}
          position="bottom"
          {...{
            ...restProps,
            'onUpdate:show': onUpdateShow,
          }}
        >
          <Header title={title} closeIcon={closeIcon} onCancel={onCancel} />
          {Description}
          {Options}
          {Content}
          <CancelText cancelText={cancelText} onCancel={onCancel} />
        </Popup>
      );
    };
  },
});
