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
      const { type, index, color, offset, rowHeight } = props;
      const style = {
        height: rowHeight,
      };

      if (index === 0) {
        style.marginLeft = `${(100 * offset) / 7}%`;
      }

      if (color) {
        switch (type) {
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
      if (props.type !== 'disabled') {
        emit('click', props.item);
      }
    };

    return () => {
      const { item, color, rowHeight } = props;
      const { type, topInfo, bottomInfo } = item;

      const TopInfo = topInfo && <div class={bem('top-info')}>{topInfo}</div>;

      const BottomInfo = bottomInfo && (
        <div class={bem('bottom-info')}>{bottomInfo}</div>
      );

      if (type === 'selected') {
        return (
          <div
            role="gridcell"
            style={style.value}
            class={[bem('day'), item.className]}
            tabindex={-1}
            onClick={onClick}
          >
            <div
              class={bem('selected-day')}
              style={{
                width: rowHeight,
                height: rowHeight,
                background: color,
              }}
            >
              {TopInfo}
              {item.text}
              {BottomInfo}
            </div>
          </div>
        );
      }

      return (
        <div
          role="gridcell"
          style={style.value}
          class={[bem('day', type), item.className]}
          tabindex={type === 'disabled' ? null : -1}
          onClick={onClick}
        >
          {TopInfo}
          {item.text}
          {BottomInfo}
        </div>
      );
    };
  },
});
