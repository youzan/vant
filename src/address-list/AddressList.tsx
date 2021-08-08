import { PropType, defineComponent } from 'vue';

// Utils
import { truthProp, createNamespace } from '../utils';

// Components
import { Button } from '../button';
import { RadioGroup } from '../radio-group';
import AddressListItem, { AddressListAddress } from './AddressListItem';

const [name, bem, t] = createNamespace('address-list');

export default defineComponent({
  name,

  props: {
    modelValue: [Number, String],
    switchable: truthProp,
    disabledText: String,
    addButtonText: String,
    defaultTagText: String,
    list: {
      type: Array as PropType<AddressListAddress[]>,
      default: () => [],
    },
    disabledList: {
      type: Array as PropType<AddressListAddress[]>,
      default: () => [],
    },
  },

  emits: [
    'add',
    'edit',
    'select',
    'click-item',
    'edit-disabled',
    'select-disabled',
    'update:modelValue',
  ],

  setup(props, { slots, emit }) {
    const renderItem = (
      item: AddressListAddress,
      index: number,
      disabled?: boolean
    ) => {
      const onEdit = () => {
        const name = disabled ? 'edit-disabled' : 'edit';
        emit(name, item, index);
      };

      const onClick = () => emit('click-item', item, index);

      const onSelect = () => {
        const name = disabled ? 'select-disabled' : 'select';
        emit(name, item, index);

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

    const renderBottom = () => (
      <div class={[bem('bottom'), 'van-safe-area-bottom']}>
        <Button
          round
          block
          type="danger"
          text={props.addButtonText || t('add')}
          class={bem('add')}
          onClick={() => emit('add')}
        />
      </div>
    );

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
