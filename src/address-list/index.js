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
    return () => {
      function genList(list, disabled) {
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
            }}
            onSelect={() => {
              emit(disabled ? 'select-disabled' : 'select', item, index);

              if (!disabled) {
                emit('update:modelValue', item.id);
              }
            }}
            onEdit={() => {
              emit(disabled ? 'edit-disabled' : 'edit', item, index);
            }}
            onClick={() => {
              emit('click-item', item, index);
            }}
          />
        ));
      }

      const List = genList(props.list);
      const DisabledList = genList(props.disabledList, true);

      return (
        <div class={bem()}>
          {slots.top?.()}
          <RadioGroup modelValue={props.modelValue}>{List}</RadioGroup>
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
                emit('add');
              }}
            />
          </div>
        </div>
      );
    };
  },
});
