import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';
import Tag from '../tag';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type AddressItemData = {
  id: string | number;
  tel: string | number;
  name: string;
  address: string;
  isDefault: boolean;
};

export type AddressItemProps = {
  data: AddressItemData;
  disabled?: boolean;
  switchable?: boolean;
  defaultTagText?: string;
};

export type AddressItemEvents = {
  onEdit(): void;
  onClick(): void;
  onSelect(): void;
};

const [createComponent, bem] = createNamespace('address-item');

function AddressItem(
  h: CreateElement,
  props: AddressItemProps,
  slots: DefaultSlots,
  ctx: RenderContext<AddressItemProps>
) {
  const { disabled, switchable } = props;

  function onClick() {
    if (switchable) {
      emit(ctx, 'select');
    }

    emit(ctx, 'click');
  }

  const genRightIcon = () => (
    <Icon
      name="edit"
      class={bem('edit')}
      onClick={(event: Event) => {
        event.stopPropagation();
        emit(ctx, 'edit');
        emit(ctx, 'click');
      }}
    />
  );

  const genContent = () => {
    const { data } = props;
    const Info = [
      <div class={bem('name')}>
        {`${data.name} ${data.tel}`}
        {data.isDefault && props.defaultTagText && (
          <Tag type="danger" round class={bem('tag')}>
            {props.defaultTagText}
          </Tag>
        )}
      </div>,
      <div class={bem('address')}>{data.address}</div>
    ];

    return switchable && !disabled ? (
      <Radio name={data.id} iconSize={16}>
        {Info}
      </Radio>
    ) : (
      Info
    );
  };

  return (
    <Cell
      class={bem({ disabled })}
      valueClass={bem('value')}
      border={false}
      clickable={switchable && !disabled}
      scopedSlots={{
        default: genContent,
        'right-icon': genRightIcon
      }}
      onClick={onClick}
      {...inherit(ctx)}
    />
  );
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean,
  defaultTagText: String
};

export default createComponent<AddressItemProps, AddressItemEvents>(AddressItem);
