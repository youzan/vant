import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type TreeSelectItem = {
  text: string;
  disabled?: boolean;
  children: TreeSelectChildren[];
};

export type TreeSelectChildren = {
  id: number;
  text: string;
  disabled?: boolean;
};

export type TreeSelectProps = {
  height: number;
  items: TreeSelectItem[];
  activeId: number | string;
  mainActiveIndex: number;
};

const [sfc, bem] = use('tree-select');

function TreeSelect(
  h: CreateElement,
  props: TreeSelectProps,
  slots: DefaultSlots,
  ctx: RenderContext<TreeSelectProps>
) {
  const { height, items, mainActiveIndex, activeId } = props;

  const selectedItem = items[mainActiveIndex] || {};
  const subItems = selectedItem.children || [];

  return (
    <div class={bem()} style={{ height: `${height}px` }} {...inherit(ctx)}>
      <div class={bem('nav')}>
        {items.map((item, index) => (
          <div
            key={index}
            class={[
              'van-ellipsis',
              bem('nitem', {
                active: mainActiveIndex === index,
                disabled: item.disabled
              })
            ]}
            onClick={() => {
              if (!item.disabled) {
                emit(ctx, 'navclick', index);
              }
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div class={bem('content')}>
        {subItems.map(item => (
          <div
            key={item.id}
            class={[
              'van-ellipsis',
              bem('item', {
                active: activeId === item.id,
                disabled: item.disabled
              })
            ]}
            onClick={() => {
              if (!item.disabled) {
                emit(ctx, 'itemclick', item);
              }
            }}
          >
            {item.text}
            {activeId === item.id && (
              <Icon name="checked" size="16px" class={bem('selected')} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

TreeSelect.props = {
  items: Array,
  mainActiveIndex: Number,
  activeId: {
    type: [Number, String],
    default: 0
  },
  height: {
    type: Number,
    default: 300
  }
};

export default sfc<TreeSelectProps>(TreeSelect);
