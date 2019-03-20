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

export type ActionsheetItem = {
  name: string;
  subname?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  callback?: (item: ActionsheetItem) => void;
};

export type ActionsheetProps = PopupMixinProps & {
  title?: string;
  actions: ActionsheetItem[];
  cancelText?: string;
};

const [sfc, bem] = use('actionsheet');

function Actionsheet(
  h: CreateElement,
  props: ActionsheetProps,
  slots: DefaultSlots,
  ctx: RenderContext<ActionsheetProps>
) {
  const { title, cancelText } = props;

  const onCancel = () => {
    emit(ctx, 'input', false);
    emit(ctx, 'cancel');
  };

  const Header = () => (
    <div class={[bem('header'), 'van-hairline--top-bottom']}>
      {title}
      <Icon name="close" class={bem('close')} onClick={onCancel} />
    </div>
  );

  const Option = (item: ActionsheetItem, index: number) => (
    <div
      class={[
        bem('item', { disabled: item.disabled || item.loading }),
        item.className,
        'van-hairline--top'
      ]}
      onClick={(event: Event) => {
        event.stopPropagation();

        if (!item.disabled && !item.loading) {
          if (item.callback) {
            item.callback(item);
          }

          emit(ctx, 'select', item, index);
        }
      }}
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
      class={bem()}
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
      {title ? Header() : props.actions.map(Option)}
      {slots.default && <div class={bem('content')}>{slots.default()}</div>}
      {cancelText && (
        <div class={bem('cancel')} onClick={onCancel}>
          {cancelText}
        </div>
      )}
    </Popup>
  );
}

Actionsheet.props = {
  ...PopupMixin.props,
  title: String,
  actions: Array,
  cancelText: String,
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};

export default sfc<ActionsheetProps>(Actionsheet);
