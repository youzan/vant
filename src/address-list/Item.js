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
    function onClick() {
      if (props.switchable) {
        emit('select');
      }
      emit('click');
    }

    const genRightIcon = () => (
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

    function genTag() {
      if (props.data.isDefault && props.defaultTagText) {
        return (
          <Tag type="danger" round class={bem('tag')}>
            {props.defaultTagText}
          </Tag>
        );
      }
    }

    function genContent() {
      const { data } = props;
      const Info = [
        <div class={bem('name')}>
          {`${data.name} ${data.tel}`}
          {genTag()}
        </div>,
        <div class={bem('address')}>{data.address}</div>,
      ];

      if (props.switchable && !props.disabled) {
        return (
          <Radio name={data.id} iconSize={18}>
            {Info}
          </Radio>
        );
      }

      return Info;
    }

    return () => {
      const { disabled } = props;

      return (
        <div class={bem({ disabled })} onClick={onClick}>
          <Cell
            v-slots={{
              default: genContent,
              'right-icon': genRightIcon,
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
