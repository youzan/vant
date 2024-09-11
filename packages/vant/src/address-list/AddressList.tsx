import {
  defineComponent,
  computed,
  type ExtractPropTypes,
  type PropType,
} from 'vue';

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
import { CheckboxGroup } from '../checkbox-group';
import AddressListItem, { AddressListAddress } from './AddressListItem';

const [name, bem, t] = createNamespace('address-list');

export const addressListProps = {
  list: makeArrayProp<AddressListAddress>(),
  modelValue: [...numericProp, Array] as PropType<
    string | number | Array<string | number>
  >,
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
    const singleChoice = computed(() => !Array.isArray(props.modelValue));

    const renderItem = (
      item: AddressListAddress,
      index: number,
      disabled?: boolean,
    ) => {
      const onEdit = () =>
        emit(disabled ? 'editDisabled' : 'edit', item, index);

      const onClick = (event: MouseEvent) =>
        emit('clickItem', item, index, { event });

      const onSelect = () => {
        emit(disabled ? 'selectDisabled' : 'select', item, index);

        if (!disabled) {
          if (singleChoice.value) {
            emit('update:modelValue', item.id);
          } else {
            const value = props.modelValue as Array<string | number>;
            if (value.includes(item.id)) {
              emit(
                'update:modelValue',
                value.filter((id) => id !== item.id),
              );
            } else {
              emit('update:modelValue', [...value, item.id]);
            }
          }
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
          singleChoice={singleChoice.value}
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
          {!singleChoice.value && Array.isArray(props.modelValue) ? (
            <CheckboxGroup modelValue={props.modelValue}>{List}</CheckboxGroup>
          ) : (
            <RadioGroup modelValue={props.modelValue}>{List}</RadioGroup>
          )}
          {DisabledText}
          {DisabledList}
          {slots.default?.()}
          {renderBottom()}
        </div>
      );
    };
  },
});
