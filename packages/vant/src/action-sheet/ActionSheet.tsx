import { nextTick, defineComponent, type ExtractPropTypes } from 'vue';

// Utils
import {
  pick,
  extend,
  truthProp,
  makeArrayProp,
  makeStringProp,
  createNamespace,
  HAPTICS_FEEDBACK,
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

export const actionSheetProps = extend({}, popupSharedProps, {
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
});

export type ActionSheetProps = ExtractPropTypes<typeof actionSheetProps>;

const popupInheritKeys = [
  ...popupSharedPropKeys,
  'round',
  'closeOnPopstate',
  'safeAreaInsetBottom',
] as const;

export default defineComponent({
  name,

  props: actionSheetProps,

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
                class={[bem('close'), HAPTICS_FEEDBACK]}
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

    const renderActionContent = (action: ActionSheetAction, index: number) => {
      if (action.loading) {
        return <Loading class={bem('loading-icon')} />;
      }

      if (slots.action) {
        return slots.action({ action, index });
      }

      return [
        <span class={bem('name')}>{action.name}</span>,
        action.subname && <div class={bem('subname')}>{action.subname}</div>,
      ];
    };

    const renderAction = (action: ActionSheetAction, index: number) => {
      const { color, loading, callback, disabled, className } = action;

      const onClick = () => {
        if (disabled || loading) {
          return;
        }

        if (callback) {
          callback(action);
        }

        if (props.closeOnClickAction) {
          updateShow(false);
        }

        nextTick(() => emit('select', action, index));
      };

      return (
        <button
          type="button"
          style={{ color }}
          class={[bem('item', { loading, disabled }), className]}
          onClick={onClick}
        >
          {renderActionContent(action, index)}
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
        {...pick(props, popupInheritKeys)}
      >
        {renderHeader()}
        {renderDescription()}
        <div class={bem('content')}>
          {props.actions.map(renderAction)}
          {slots.default?.()}
        </div>
        {renderCancel()}
      </Popup>
    );
  },
});
