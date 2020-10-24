// Utils
import { createNamespace } from '../utils';

// Components
import Button from '../button';
import RadioGroup from '../radio-group';
import AddressItem from './Item';

const [createComponent, bem, t] = createNamespace('address-list');

export default createComponent({
  props: {
    list: Array,
    modelValue: [Number, String],
    disabledList: Array,
    disabledText: String,
    addButtonText: String,
    defaultTagText: String,
    switchable: {
      type: Boolean,
      default: true,
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
    const renderItem = (item, index, disabled) => {
      const onEdit = () => {
        const name = disabled ? 'edit-disabled' : 'edit';
        emit(name, item, index);
      };

      const onClick = () => {
        emit('click-item', item, index);
      };

      const onSelect = () => {
        const name = disabled ? 'select-disabled' : 'select';
        emit(name, item, index);

        if (!disabled) {
          emit('update:modelValue', item.id);
        }
      };

      return (
        <AddressItem
          v-slots={{
            bottom: slots['item-bottom'],
          }}
          key={item.id}
          data={item}
          disabled={disabled}
          switchable={props.switchable}
          defaultTagText={props.defaultTagText}
          onEdit={onEdit}
          onClick={onClick}
          onSelect={onSelect}
        />
      );
    };

    const renderList = (list, disabled) => {
      if (list) {
        return list.map((item, index) => renderItem(item, index, disabled));
      }
    };

    const renderBottom = () => {
      const onClick = () => {
        emit('add');
      };

      return (
        <div class={bem('bottom')}>
          <Button
            round
            block
            type="danger"
            text={props.addButtonText || t('add')}
            class={bem('add')}
            onClick={onClick}
          />
        </div>
      );
    };

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
