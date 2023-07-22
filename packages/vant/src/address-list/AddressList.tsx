import { defineComponent, type ExtractPropTypes } from 'vue';

// Utils
import {
  truthProp,
  numericProp,
  makeArrayProp,
  createNamespace,
  makeStringProp,
} from '../utils';

// Components
import { Button } from '../button';
import { RadioGroup } from '../radio-group';
import AddressListItem, { AddressListAddress } from './AddressListItem';

const [name, bem, t] = createNamespace('address-list');

export const addressListProps = {
  list: makeArrayProp<AddressListAddress>(),
  modelValue: numericProp,
  switchable: truthProp,
  disabledText: String,
  disabledList: makeArrayProp<AddressListAddress>(),
  showAddButton: truthProp,
  addButtonText: String,
  defaultTagText: String,
  rightIcon: makeStringProp('edit'),
};

export type AddressListProps = ExtractPropTypes<typeof addressListProps>;

export default defineComponent({
  name,

  props: addressListProps,

  emits: [
    'add',
    'edit',
    'select',
    'clickItem',
    'editDisabled',
    'selectDisabled',
    'update:modelValue',
  ],

  setup(props, { slots, emit }) {
    const renderItem = (
      item: AddressListAddress,
      index: number,
      disabled?: boolean,
    ) => {
      const onEdit = () =>
        emit(disabled ? 'editDisabled' : 'edit', item, index);

      const onClick = () => emit('clickItem', item, index);

      const onSelect = () => {
        emit(disabled ? 'selectDisabled' : 'select', item, index);

        if (!disabled) {
          emit('update:modelValue', item.id);
        }
      };

      return (
        <AddressListItem
          v-slots={{
            bottom: slots['item-bottom'],
            tag: slots.tag,
          }}
          key={item.id}
          address={item}
          disabled={disabled}
          switchable={props.switchable}
          defaultTagText={props.defaultTagText}
          rightIcon={props.rightIcon}
          onEdit={onEdit}
          onClick={onClick}
          onSelect={onSelect}
        />
      );
    };

    const renderList = (list: AddressListAddress[], disabled?: boolean) => {
      if (list) {
        return list.map((item, index) => renderItem(item, index, disabled));
      }
    };

    const renderBottom = () =>
      props.showAddButton ? (
        <div class={[bem('bottom'), 'van-safe-area-bottom']}>
          <Button
            round
            block
            type="primary"
            text={props.addButtonText || t('add')}
            class={bem('add')}
            onClick={() => emit('add')}
          />
        </div>
      ) : undefined;

    return () => {
      const List = renderList(props.list);
      const DisabledList = renderList(props.disabledList, true);
      const DisabledText = props.disabledText && (
        <div class={bem('disabled-text')}>{props.disabledText}</div>
      );

      return (
        <div class={bem()}>
          {slots.top?.()}
          <RadioGroup modelValue={props.modelValue}>{List}</RadioGroup>
          {DisabledText}
          {DisabledList}
          {slots.default?.()}
          {renderBottom()}
        </div>
      );
    };
  },
});
