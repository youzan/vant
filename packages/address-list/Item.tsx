import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type AddressItemData = {
  id: string | number;
  tel: string | number;
  name: string;
  address: string;
};

export type AddressItemProps = {
  data: AddressItemData;
  disabled?: boolean;
  switchable?: boolean;
};

export type AddressItemEvents = {
  onEdit(): void;
  onSelect(): void;
};

const [sfc, bem] = use('address-item');

function AddressItem(
  h: CreateElement,
  props: AddressItemProps,
  slots: DefaultSlots,
  ctx: RenderContext<AddressItemProps>
) {
  const { disabled, switchable } = props;

  const renderRightIcon = () => (
    <Icon
      name="edit"
      class={bem('edit')}
      onClick={(event: Event) => {
        event.stopPropagation();
        emit(ctx, 'edit');
      }}
    />
  );

  const renderContent = () => {
    const { data } = props;
    const Info = [
      <div class={bem('name')}>{`${data.name}，${data.tel}`}</div>,
      <div class={bem('address')}>{data.address}</div>
    ];

    return props.switchable ? <Radio name={data.id}>{Info}</Radio> : Info;
  };

  const onSelect = () => {
    if (props.switchable) {
      emit(ctx, 'select');
    }
  };

  return (
    <Cell
      class={bem({ disabled, unswitchable: !switchable })}
      valueClass={bem('value')}
      isLink={!disabled && switchable}
      scopedSlots={{
        default: renderContent,
        'right-icon': renderRightIcon
      }}
      onClick={onSelect}
      {...inherit(ctx)}
    />
  );
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean
};

export default sfc<AddressItemProps, AddressItemEvents>(AddressItem);
