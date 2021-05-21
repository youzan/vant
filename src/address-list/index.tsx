// Utils
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';

// Components
import Button from '../button';
import RadioGroup from '../radio-group';
import AddressItem, { AddressItemData } from './Item';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/types';

export type AddressListProps = {
  value?: string | number;
  switchable: boolean;
  disabledText?: string;
  addButtonText?: string;
  list?: AddressItemData[];
  disabledList?: AddressItemData[];
  defaultTagText?: string;
};

export type AddressListSlots = DefaultSlots & {
  top?: ScopedSlot;
  'item-bottom'?: ScopedSlot;
  tag?: ScopedSlot;
};

const [createComponent, bem, t] = createNamespace('address-list');

function AddressList(
  h: CreateElement,
  props: AddressListProps,
  slots: AddressListSlots,
  ctx: RenderContext<AddressListProps>
) {
  function genList(list?: AddressItemData[], disabled?: boolean) {
    if (!list) {
      return;
    }

    return list.map((item, index) => (
      <AddressItem
        data={item}
        key={item.id}
        disabled={disabled}
        switchable={props.switchable}
        defaultTagText={props.defaultTagText}
        scopedSlots={{
          bottom: slots['item-bottom'],
          tag: slots.tag,
        }}
        onSelect={() => {
          emit(ctx, disabled ? 'select-disabled' : 'select', item, index);

          if (!disabled) {
            emit(ctx, 'input', item.id);
          }
        }}
        onEdit={() => {
          emit(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
        }}
        onClick={() => {
          emit(ctx, 'click-item', item, index);
        }}
      />
    ));
  }

  const List = genList(props.list);
  const DisabledList = genList(props.disabledList, true);

  return (
    <div class={bem()} {...inherit(ctx)}>
      {slots.top?.()}
      <RadioGroup value={props.value}>{List}</RadioGroup>
      {props.disabledText && (
        <div class={bem('disabled-text')}>{props.disabledText}</div>
      )}
      {DisabledList}
      {slots.default?.()}
      <div class={bem('bottom')}>
        <Button
          round
          block
          type="danger"
          class={bem('add')}
          text={props.addButtonText || t('add')}
          onClick={() => {
            emit(ctx, 'add');
          }}
        />
      </div>
    </div>
  );
}

AddressList.props = {
  list: Array,
  value: [Number, String],
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  defaultTagText: String,
  switchable: {
    type: Boolean,
    default: true,
  },
};

export default createComponent<AddressListProps>(AddressList);
