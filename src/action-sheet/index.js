// Utils
import { createNamespace, pick } from '../utils';

// Components
import Icon from '../icon';
import Popup, { popupSharedProps } from '../popup';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('action-sheet');

export default createComponent({
  props: {
    ...popupSharedProps,
    title: String,
    actions: Array,
    cancelText: String,
    description: String,
    closeOnPopstate: Boolean,
    closeOnClickAction: Boolean,
    round: {
      type: Boolean,
      default: true,
    },
    closeable: {
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
  },

  emits: ['select', 'cancel', 'update:show'],

  setup(props, { slots, emit }) {
    const popupPropKeys = Object.keys(popupSharedProps);

    const onUpdateShow = (show) => {
      emit('update:show', show);
    };

    const onCancel = () => {
      onUpdateShow(false);
      emit('cancel');
    };

    const renderHeader = () => {
      if (props.title) {
        return (
          <div class={bem('header')}>
            {props.title}
            {props.closeable && (
              <Icon
                name={props.closeIcon}
                class={bem('close')}
                onClick={onCancel}
              />
            )}
          </div>
        );
      }
    };

    const renderCancel = () => {
      if (props.cancelText) {
        return [
          <div class={bem('gap')} />,
          <button type="button" class={bem('cancel')} onClick={onCancel}>
            {props.cancelText}
          </button>,
        ];
      }
    };

    const renderOption = (item, index) => {
      const { name, color, subname, loading, disabled, className } = item;

      const Content = loading ? (
        <Loading class={bem('loading-icon')} />
      ) : (
        [
          <span class={bem('name')}>{name}</span>,
          subname && <div class={bem('subname')}>{subname}</div>,
        ]
      );

      const onClick = () => {
        emit('select', item, index);
        if (props.closeOnClickAction) {
          onUpdateShow(false);
        }
      };

      return (
        <button
          type="button"
          style={{ color }}
          class={[bem('item', { loading, disabled }), className]}
          onClick={onClick}
        >
          {Content}
        </button>
      );
    };

    const renderDescription = () => {
      if (props.description || slots.description) {
        const content = slots.description
          ? slots.description()
          : props.description;
        return <div class={bem('description')}>{content}</div>;
      }
    };

    const renderOptions = () => {
      if (props.actions) {
        return props.actions.map(renderOption);
      }
    };

    return () => (
      <Popup
        class={bem()}
        round={props.round}
        position="bottom"
        {...{
          ...pick(props, popupPropKeys),
          'onUpdate:show': onUpdateShow,
        }}
      >
        {renderHeader()}
        {renderDescription()}
        {renderOptions()}
        {slots.default && <div class={bem('content')}>{slots.default()}</div>}
        {renderCancel()}
      </Popup>
    );
  },
});
