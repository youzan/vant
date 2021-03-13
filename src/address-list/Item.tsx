// Utils
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';

// Components
import Tag from '../tag';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

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

export type AddressItemSlots = DefaultSlots & {
  bottom?: ScopedSlot;
  tag?: ScopedSlot;
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
  slots: AddressItemSlots,
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

  function genTag() {
    if (slots.tag) {
      return slots.tag({ ...props.data });
    }
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

    if (switchable && !disabled) {
      return (
        <Radio name={data.id} iconSize={18}>
          {Info}
        </Radio>
      );
    }

    return Info;
  }

  return (
    <div class={bem({ disabled })} onClick={onClick}>
      <Cell
        border={false}
        valueClass={bem('value')}
        scopedSlots={{
          default: genContent,
          'right-icon': genRightIcon,
        }}
        {...inherit(ctx)}
      />
      {slots.bottom?.({ ...props.data, disabled })}
    </div>
  );
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean,
  defaultTagText: String,
};

export default createComponent<AddressItemProps, AddressItemEvents>(
  AddressItem
);
