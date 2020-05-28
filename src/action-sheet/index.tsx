// Utils
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';

// Mixins
import { popupMixinProps } from '../mixins/popup';

// Components
import Icon from '../icon';
import Popup from '../popup';
import Loading from '../loading';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';
import { PopupMixinProps } from '../mixins/popup/type';

export type ActionSheetItem = {
  name: string;
  color?: string;
  subname?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  callback?: (item: ActionSheetItem) => void;
};

export type ActionSheetProps = PopupMixinProps & {
  round: boolean;
  title?: string;
  actions?: ActionSheetItem[];
  duration: number | string;
  closeIcon: string;
  cancelText?: string;
  description?: string;
  closeOnPopstate?: boolean;
  closeOnClickAction?: boolean;
  safeAreaInsetBottom?: boolean;
};

const [createComponent, bem] = createNamespace('action-sheet');

function ActionSheet(
  h: CreateElement,
  props: ActionSheetProps,
  slots: DefaultSlots,
  ctx: RenderContext<ActionSheetProps>
) {
  const { title, cancelText } = props;

  function onCancel() {
    emit(ctx, 'input', false);
    emit(ctx, 'cancel');
  }

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

  function Option(item: ActionSheetItem, index: number) {
    const { disabled, loading, callback } = item;

    function onClickOption(event: MouseEvent) {
      event.stopPropagation();

      if (disabled || loading) {
        return;
      }

      if (callback) {
        callback(item);
      }

      emit(ctx, 'select', item, index);

      if (props.closeOnClickAction) {
        emit(ctx, 'input', false);
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
      round={props.round}
      value={props.value}
      overlay={props.overlay}
      duration={props.duration}
      lazyRender={props.lazyRender}
      lockScroll={props.lockScroll}
      getContainer={props.getContainer}
      closeOnPopstate={props.closeOnPopstate}
      closeOnClickOverlay={props.closeOnClickOverlay}
      safeAreaInsetBottom={props.safeAreaInsetBottom}
      {...inherit(ctx, true)}
    >
      {Header()}
      {Description}
      {props.actions && props.actions.map(Option)}
      {Content()}
      {CancelText()}
    </Popup>
  );
}

ActionSheet.props = {
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
};

export default createComponent<ActionSheetProps>(ActionSheet);
