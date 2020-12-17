// Utils
import { createNamespace, addUnit } from '../utils';
import { emit, inherit } from '../utils/functional';

// Components
import Icon from '../icon';
import Sidebar from '../sidebar';
import SidebarItem from '../sidebar-item';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots, ScopedSlot } from '../utils/types';

export type TreeSelectItem = {
  text: string;
  dot?: boolean;
  info?: string | number;
  badge?: string | number;
  disabled?: boolean;
  className?: any;
  children: TreeSelectChildren[];
};

export type TreeSelectChildren = {
  id: number;
  text: string;
  disabled?: boolean;
};

export type TreeSelectActiveId = number | string | (number | string)[];

export type TreeSelectProps = {
  max: number | string;
  height: number | string;
  items: TreeSelectItem[];
  activeId: TreeSelectActiveId;
  selectedIcon: string;
  mainActiveIndex: number | string;
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
  const { items, height, activeId, selectedIcon, mainActiveIndex } = props;

  if (process.env.NODE_ENV === 'development') {
    if (ctx.listeners.navclick) {
      console.warn(
        '[Vant] TreeSelect: "navclick" event is deprecated, use "click-nav" instead.'
      );
    }
    if (ctx.listeners.itemclick) {
      console.warn(
        '[Vant] TreeSelect: "itemclick" event is deprecated, use "click-item" instead.'
      );
    }
  }

  const selectedItem: Partial<TreeSelectItem> = items[+mainActiveIndex] || {};
  const subItems = selectedItem.children || [];
  const isMultiple = Array.isArray(activeId);

  function isActiveItem(id: number | string) {
    return isMultiple
      ? (activeId as (number | string)[]).indexOf(id) !== -1
      : activeId === id;
  }

  const Navs = items.map((item) => (
    <SidebarItem
      dot={item.dot}
      info={item.badge ?? item.info}
      title={item.text}
      disabled={item.disabled}
      class={[bem('nav-item'), item.className]}
    />
  ));

  function Content() {
    if (slots.content) {
      return slots.content();
    }

    return subItems.map((item) => (
      <div
        key={item.id}
        class={[
          'van-ellipsis',
          bem('item', {
            active: isActiveItem(item.id),
            disabled: item.disabled,
          }),
        ]}
        onClick={() => {
          if (!item.disabled) {
            let newActiveId: TreeSelectActiveId = item.id;
            if (isMultiple) {
              newActiveId = (activeId as (string | number)[]).slice();

              const index = newActiveId.indexOf(item.id);

              if (index !== -1) {
                newActiveId.splice(index, 1);
              } else if (newActiveId.length < props.max) {
                newActiveId.push(item.id);
              }
            }

            emit(ctx, 'update:active-id', newActiveId);
            emit(ctx, 'click-item', item);
            // compatible with legacy usage, should be removed in next major version
            emit(ctx, 'itemclick', item);
          }
        }}
      >
        {item.text}
        {isActiveItem(item.id) && (
          <Icon name={selectedIcon} class={bem('selected')} />
        )}
      </div>
    ));
  }

  return (
    <div class={bem()} style={{ height: addUnit(height) }} {...inherit(ctx)}>
      <Sidebar
        class={bem('nav')}
        activeKey={mainActiveIndex}
        onChange={(index: number) => {
          emit(ctx, 'update:main-active-index', index);
          emit(ctx, 'click-nav', index);
          // compatible with legacy usage, should be removed in next major version
          emit(ctx, 'navclick', index);
        }}
      >
        {Navs}
      </Sidebar>
      <div class={bem('content')}>{Content()}</div>
    </div>
  );
}

TreeSelect.props = {
  max: {
    type: [Number, String],
    default: Infinity,
  },
  items: {
    type: Array,
    default: () => [],
  },
  height: {
    type: [Number, String],
    default: 300,
  },
  activeId: {
    type: [Number, String, Array],
    default: 0,
  },
  selectedIcon: {
    type: String,
    default: 'success',
  },
  mainActiveIndex: {
    type: [Number, String],
    default: 0,
  },
};

export default createComponent<TreeSelectProps>(TreeSelect);
