import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import { BORDER_TOP, BORDER_BOTTOM } from '../utils/constant';
import { PopupMixin } from '../mixins/popup';
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
  duration: number;
  cancelText?: string;
  description?: string;
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
        <div class={[bem('header'), BORDER_BOTTOM]}>
          {title}
          <Icon name="close" class={bem('close')} onClick={onCancel} />
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
    const disabled = item.disabled || item.loading;

    function onClickOption(event: MouseEvent) {
      event.stopPropagation();

      if (item.disabled || item.loading) {
        return;
      }

      if (item.callback) {
        item.callback(item);
      }

      emit(ctx, 'select', item, index);

      if (props.closeOnClickAction) {
        emit(ctx, 'input', false);
      }
    }

    function OptionContent() {
      if (item.loading) {
        return <Loading size="20px" />;
      }

      return [
        <span class={bem('name')}>{item.name}</span>,
        item.subname && <span class={bem('subname')}>{item.subname}</span>
      ];
    }

    return (
      <button
        class={[bem('item', { disabled }), item.className, BORDER_TOP]}
        style={{ color: item.color }}
        onClick={onClickOption}
      >
        {OptionContent()}
      </button>
    );
  }

  function CancelText() {
    if (cancelText) {
      return (
        <button class={bem('cancel')} onClick={onCancel}>
          {cancelText}
        </button>
      );
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
  ...PopupMixin.props,
  title: String,
  actions: Array,
  duration: Number,
  cancelText: String,
  description: String,
  getContainer: [String, Function],
  closeOnClickAction: Boolean,
  round: {
    type: Boolean,
    default: true
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};

export default createComponent<ActionSheetProps>(ActionSheet);
