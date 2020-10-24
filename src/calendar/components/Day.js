import { createNamespace } from '../../utils';
import { bem } from '../utils';
import { computed } from 'vue';

const [createComponent] = createNamespace('calendar-day');

export default createComponent({
  props: {
    item: Object,
    color: String,
    index: Number,
    offset: Number,
    rowHeight: String,
  },

  emits: ['click'],

  setup(props, { emit }) {
    const style = computed(() => {
      const { item, index, color, offset, rowHeight } = props;
      const style = {
        height: rowHeight,
      };

      if (index === 0) {
        style.marginLeft = `${(100 * offset) / 7}%`;
      }

      if (color) {
        switch (item.type) {
          case 'end':
          case 'start':
          case 'start-end':
          case 'multiple-middle':
          case 'multiple-selected':
            style.background = color;
            break;
          case 'middle':
            style.color = color;
            break;
        }
      }

      return style;
    });

    const onClick = () => {
      if (props.item.type !== 'disabled') {
        emit('click', props.item);
      }
    };

    const renderContent = () => {
      const { item, color, rowHeight } = props;
      const { type, text, topInfo, bottomInfo } = item;

      const TopInfo = topInfo && <div class={bem('top-info')}>{topInfo}</div>;

      const BottomInfo = bottomInfo && (
        <div class={bem('bottom-info')}>{bottomInfo}</div>
      );

      const Nodes = [TopInfo, text, BottomInfo];

      if (type === 'selected') {
        return (
          <div
            class={bem('selected-day')}
            style={{
              width: rowHeight,
              height: rowHeight,
              background: color,
            }}
          >
            {Nodes}
          </div>
        );
      }

      return Nodes;
    };

    return () => {
      const { type, className } = props.item;
      return (
        <div
          role="gridcell"
          style={style.value}
          class={[bem('day', type), className]}
          tabindex={type === 'disabled' ? null : -1}
          onClick={onClick}
        >
          {renderContent()}
        </div>
      );
    };
  },
});
