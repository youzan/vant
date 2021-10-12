import { nextTick, defineComponent } from 'vue';

// Utils
import {
  pick,
  extend,
  truthProp,
  makeArrayProp,
  makeStringProp,
  createNamespace,
} from '../utils';

// Components
import { Icon } from '../icon';
import { Popup } from '../popup';
import { Loading } from '../loading';
import { popupSharedProps, popupSharedPropKeys } from '../popup/shared';

const [name, bem] = createNamespace('action-sheet');

export type ActionSheetAction = {
  name?: string;
  color?: string;
  subname?: string;
  loading?: boolean;
  disabled?: boolean;
  callback?: (action: ActionSheetAction) => void;
  className?: unknown;
};

const popupKeys = [
  ...popupSharedPropKeys,
  'round',
  'closeOnPopstate',
  'safeAreaInsetBottom',
] as const;

export default defineComponent({
  name,

  props: extend({}, popupSharedProps, {
    title: String,
    round: truthProp,
    actions: makeArrayProp<ActionSheetAction>(),
    closeIcon: makeStringProp('cross'),
    closeable: truthProp,
    cancelText: String,
    description: String,
    closeOnPopstate: truthProp,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: truthProp,
  }),

  emits: ['select', 'cancel', 'update:show'],

  setup(props, { slots, emit }) {
    const updateShow = (show: boolean) => emit('update:show', show);

    const onCancel = () => {
      updateShow(false);
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
      if (slots.cancel || props.cancelText) {
        return [
          <div class={bem('gap')} />,
          <button type="button" class={bem('cancel')} onClick={onCancel}>
            {slots.cancel ? slots.cancel() : props.cancelText}
          </button>,
        ];
      }
    };

    const renderOption = (item: ActionSheetAction, index: number) => {
      const { name, color, subname, loading, callback, disabled, className } =
        item;

      const Content = loading ? (
        <Loading class={bem('loading-icon')} />
      ) : (
        [
          <span class={bem('name')}>{name}</span>,
          subname && <div class={bem('subname')}>{subname}</div>,
        ]
      );

      const onClick = () => {
        if (disabled || loading) {
          return;
        }

        if (callback) {
          callback(item);
        }

        if (props.closeOnClickAction) {
          updateShow(false);
        }

        nextTick(() => emit('select', item, index));
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

    return () => (
      <Popup
        class={bem()}
        position="bottom"
        onUpdate:show={updateShow}
        {...pick(props, popupKeys)}
      >
        {renderHeader()}
        {renderDescription()}
        <div class={bem('content')}>
          {props.actions.map(renderOption)}
          {slots.default?.()}
        </div>
        {renderCancel()}
      </Popup>
    );
  },
});
