import { createNamespace, addUnit } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

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

export type TreeSelectActiveId = number | string | (number | string)[];

export type TreeSelectProps = {
  height: number | string;
  items: TreeSelectItem[];
  activeId: TreeSelectActiveId;
  mainActiveIndex: number;
};

export type TreeSelectSlots = DefaultSlots & {
  content?: ScopedSlot;
};

const [createComponent, bem] = createNamespace('tree-select');

function TreeSelect(
  h: CreateElement,
  props: TreeSelectProps,
  slots: TreeSelectSlots,
  ctx: RenderContext<TreeSelectProps>
) {
  const { height, items, mainActiveIndex, activeId } = props;

  const selectedItem: Partial<TreeSelectItem> = items[mainActiveIndex] || {};
  const subItems = selectedItem.children || [];
  const isMultiple = Array.isArray(activeId);

  function isActiveItem(id: number | string) {
    return isMultiple
      ? (activeId as (number | string)[]).indexOf(id) !== -1
      : activeId === id;
  }

  const Nav = items.map((item, index) => (
    <div
      key={index}
      class={[
        'van-ellipsis',
        bem('nav-item', {
          active: mainActiveIndex === index,
          disabled: item.disabled
        })
      ]}
      onClick={() => {
        if (!item.disabled) {
          emit(ctx, 'click-nav', index);
          emit(ctx, 'update:main-active-index', index);

          // compatible for old usage, should be removed in next major version
          emit(ctx, 'navclick', index);
        }
      }}
    >
      {item.text}
    </div>
  ));

  function Content() {
    if (slots.content) {
      return slots.content();
    }

    return subItems.map(item => (
      <div
        key={item.id}
        class={[
          'van-ellipsis',
          bem('item', {
            active: isActiveItem(item.id),
            disabled: item.disabled
          })
        ]}
        onClick={() => {
          if (!item.disabled) {
            let newActiveId: TreeSelectActiveId = item.id;
            if (isMultiple) {
              newActiveId = (activeId as (string | number)[]).slice();

              const index = newActiveId.indexOf(item.id);

              if (index !== -1) {
                newActiveId.splice(index, 1);
              } else {
                newActiveId.push(item.id);
              }
            }

            emit(ctx, 'click-item', item);
            emit(ctx, 'update:active-id', newActiveId);

            // compatible for old usage, should be removed in next major version
            emit(ctx, 'itemclick', item);
          }
        }}
      >
        {item.text}
        {isActiveItem(item.id) && (
          <Icon name="checked" size="16px" class={bem('selected')} />
        )}
      </div>
    ));
  }

  return (
    <div class={bem()} style={{ height: addUnit(height) }} {...inherit(ctx)}>
      <div class={bem('nav')}>{Nav}</div>
      <div class={bem('content')}>{Content()}</div>
    </div>
  );
}

TreeSelect.props = {
  items: {
    type: Array,
    default: () => []
  },
  height: {
    type: [Number, String],
    default: 300
  },
  activeId: {
    type: [Number, String, Array],
    default: 0
  },
  mainActiveIndex: {
    type: Number,
    default: 0
  }
};

export default createComponent<TreeSelectProps>(TreeSelect);
