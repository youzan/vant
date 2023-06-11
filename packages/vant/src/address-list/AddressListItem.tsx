import { defineComponent, type PropType } from 'vue';

// Utils
import {
  extend,
  createNamespace,
  makeRequiredProp,
  type Numeric,
  makeStringProp,
} from '../utils';

// Components
import { Tag } from '../tag';
import { Icon } from '../icon';
import { Cell } from '../cell';
import { Radio } from '../radio';

const [name, bem] = createNamespace('address-item');

export type AddressListAddress = {
  id: Numeric;
  tel: Numeric;
  name: string;
  address: string;
  isDefault?: boolean;
};

export default defineComponent({
  name,

  props: {
    address: makeRequiredProp<PropType<AddressListAddress>>(Object),
    disabled: Boolean,
    switchable: Boolean,
    defaultTagText: String,
    rightIcon: makeStringProp('edit'),
  },

  emits: ['edit', 'click', 'select'],

  setup(props, { slots, emit }) {
    const onClick = () => {
      if (props.switchable) {
        emit('select');
      }
      emit('click');
    };

    const renderRightIcon = () => (
      <Icon
        name={props.rightIcon}
        class={bem('edit')}
        onClick={(event) => {
          event.stopPropagation();
          emit('edit');
          emit('click');
        }}
      />
    );

    const renderTag = () => {
      if (slots.tag) {
        return slots.tag(props.address);
      }
      if (props.address.isDefault && props.defaultTagText) {
        return (
          <Tag type="primary" round class={bem('tag')}>
            {props.defaultTagText}
          </Tag>
        );
      }
    };

    const renderContent = () => {
      const { address, disabled, switchable } = props;

      const Info = [
        <div class={bem('name')}>
          {`${address.name} ${address.tel}`}
          {renderTag()}
        </div>,
        <div class={bem('address')}>{address.address}</div>,
      ];

      if (switchable && !disabled) {
        return (
          <Radio name={address.id} iconSize={18}>
            {Info}
          </Radio>
        );
      }

      return Info;
    };

    return () => {
      const { disabled } = props;

      return (
        <div class={bem({ disabled })} onClick={onClick}>
          <Cell
            v-slots={{
              title: renderContent,
              'right-icon': renderRightIcon,
            }}
            border={false}
            titleClass={bem('title')}
          />
          {slots.bottom?.(extend({}, props.address, { disabled }))}
        </div>
      );
    };
  },
});
