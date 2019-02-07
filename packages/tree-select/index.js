import { use } from '../utils';
import Icon from '../icon';

const [sfc, bem] = use('tree-select');

export default sfc({
  props: {
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
  },

  computed: {
    subItems() {
      const selectedItem = this.items[this.mainActiveIndex] || {};
      return selectedItem.children || [];
    }
  },

  methods: {
    onClickNav(data, index) {
      if (!data.disabled) {
        this.$emit('navclick', index);
      }
    },

    onItemSelect(data) {
      if (!data.disabled) {
        this.$emit('itemclick', data);
      }
    }
  },

  render(h) {
    const {
      height,
      items,
      mainActiveIndex,
      activeId,
      subItems
    } = this;

    return (
      <div class={bem()} style={{ height: height + 'px' }}>
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
                this.onClickNav(item, index);
              }}
            >
              { item.text }
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
                this.onItemSelect(item);
              }}
            >
              { item.text }
              {activeId === item.id && (
                <Icon
                  name="checked"
                  size="16px"
                  class={bem('selected')}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
});
