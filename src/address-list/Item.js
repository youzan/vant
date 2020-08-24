// Utils
import { createNamespace } from '../utils';

// Components
import Tag from '../tag';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';

const [createComponent, bem] = createNamespace('address-item');

export default createComponent({
  props: {
    data: Object,
    disabled: Boolean,
    switchable: Boolean,
    defaultTagText: String,
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
        name="edit"
        class={bem('edit')}
        onClick={(event) => {
          event.stopPropagation();
          emit('edit');
          emit('click');
        }}
      />
    );

    const renderTag = () => {
      if (props.data.isDefault && props.defaultTagText) {
        return (
          <Tag type="danger" round class={bem('tag')}>
            {props.defaultTagText}
          </Tag>
        );
      }
    };

    const renderContent = () => {
      const { data, disabled, switchable } = props;

      const Info = [
        <div class={bem('name')}>
          {`${data.name} ${data.tel}`}
          {renderTag()}
        </div>,
        <div class={bem('address')}>{data.address}</div>,
      ];

      if (switchable && !disabled) {
        return (
          <Radio name={data.id} iconSize={18}>
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
              default: renderContent,
              'right-icon': renderRightIcon,
            }}
            border={false}
            valueClass={bem('value')}
          />
          {slots.bottom?.({ ...props.data, disabled })}
        </div>
      );
    };
  },
});
