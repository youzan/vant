import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import { PopupMixin } from '../mixins/popup';
import Icon from '../icon';
import Loading from '../loading';
import Popup from '../popup';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';
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

  function onClickOption(item: ActionSheetItem, index: number) {
    return function (event: Event) {
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
    };
  }

  const Option = (item: ActionSheetItem, index: number) => (
    <div
      class={[
        bem('item', { disabled: item.disabled || item.loading }),
        item.className,
        'van-hairline--top'
      ]}
      onClick={onClickOption(item, index)}
    >
      {item.loading ? (
        <Loading class={bem('loading')} size="20px" />
      ) : (
        [
          <span class={bem('name')}>{item.name}</span>,
          item.subname && <span class={bem('subname')}>{item.subname}</span>
        ]
      )}
    </div>
  );

  return (
    <Popup
      class={bem({ 'safe-area-inset-bottom': props.safeAreaInsetBottom })}
      value={props.value}
      position="bottom"
      overlay={props.overlay}
      lazyRender={props.lazyRender}
      getContainer={props.getContainer}
      closeOnClickOverlay={props.closeOnClickOverlay}
      onInput={(value: boolean) => {
        emit(ctx, 'input', value);
      }}
      {...inherit(ctx)}
    >
      {Header()}
      {props.actions.map(Option)}
      {slots.default && <div class={bem('content')}>{slots.default()}</div>}
      {cancelText && (
        <div class={bem('cancel')} onClick={onCancel}>
          {cancelText}
        </div>
      )}
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
