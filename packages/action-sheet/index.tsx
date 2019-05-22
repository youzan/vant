import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
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
  subname?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  callback?: (item: ActionSheetItem) => void;
};

export type ActionSheetProps = PopupMixinProps & {
  title?: string;
  actions: ActionSheetItem[];
  cancelText?: string;
  closeOnClickAction?: boolean;
  safeAreaInsetBottom?: boolean;
};

const [sfc, bem] = use('action-sheet');

function ActionSheet(
  h: CreateElement,
  props: ActionSheetProps,
  slots: DefaultSlots,
  ctx: RenderContext<ActionSheetProps>
) {
  const { title, cancelText } = props;

  function onInput(value: boolean) {
    emit(ctx, 'input', value);
  }

  function onCancel() {
    emit(ctx, 'input', false);
    emit(ctx, 'cancel');
  }

  function Header() {
    if (title) {
      return (
        <div class={[bem('header'), 'van-hairline--bottom']}>
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
      <div
        class={[bem('item', { disabled }), item.className, 'van-hairline--top']}
        onClick={onClickOption}
      >
        {OptionContent()}
      </div>
    );
  }

  function CancelText() {
    if (cancelText) {
      return (
        <div class={bem('cancel')} onClick={onCancel}>
          {cancelText}
        </div>
      );
    }
  }

  return (
    <Popup
      class={bem({ 'safe-area-inset-bottom': props.safeAreaInsetBottom })}
      position="bottom"
      value={props.value}
      overlay={props.overlay}
      lazyRender={props.lazyRender}
      lockScroll={props.lockScroll}
      getContainer={props.getContainer}
      closeOnClickOverlay={props.closeOnClickOverlay}
      onInput={onInput}
      {...inherit(ctx)}
    >
      {Header()}
      {props.actions.map(Option)}
      {Content()}
      {CancelText()}
    </Popup>
  );
}

ActionSheet.props = {
  ...PopupMixin.props,
  title: String,
  actions: Array,
  cancelText: String,
  closeOnClickAction: Boolean,
  safeAreaInsetBottom: Boolean,
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};

export default sfc<ActionSheetProps>(ActionSheet);
