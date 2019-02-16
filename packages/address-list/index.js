import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Button from '../button';
import RadioGroup from '../radio-group';
import AddressItem from './Item';

const [sfc, bem, t] = use('address-list');

function AddressList(h, props, slots, ctx) {
  const getList = (list, disabled) =>
    list.map((item, index) => (
      <AddressItem
        data={item}
        key={item.id}
        disabled={disabled}
        switchable={props.switchable && !disabled}
        onSelect={() => {
          emit(ctx, disabled ? 'select-disabled' : 'select', item, index);
        }}
        onEdit={() => {
          emit(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
        }}
      />
    ));

  const List = getList(props.list);
  const DisabledList = getList(props.disabledList, true);

  return (
    <div class={bem()} {...inherit(ctx)}>
      {slots.top && slots.top()}
      <RadioGroup
        value={props.value}
        onInput={event => {
          emit(ctx, 'input', event);
        }}
      >
        {List}
      </RadioGroup>
      {props.disabledText && (
        <div class={bem('disabled-text')}>{props.disabledText}</div>
      )}
      {DisabledList}
      {slots.default && slots.default()}
      <Button
        square
        size="large"
        type="danger"
        class={bem('add')}
        text={props.addButtonText || t('add')}
        onClick={() => {
          emit(ctx, 'add');
        }}
      />
    </div>
  );
}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [String, Number],
  switchable: {
    type: Boolean,
    default: true
  }
};

export default sfc(AddressList);
