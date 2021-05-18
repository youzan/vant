import { computed, CSSProperties, PropType, defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { bem } from './utils';

const [name] = createNamespace('calendar-day');

export type CalendarDayType =
  | ''
  | 'start'
  | 'start-end'
  | 'middle'
  | 'end'
  | 'selected'
  | 'multiple-middle'
  | 'multiple-selected'
  | 'disabled'
  | 'placeholder';

export type CalendarDayItem = {
  date?: Date;
  text?: string | number;
  type?: CalendarDayType;
  topInfo?: string;
  className?: unknown;
  bottomInfo?: string;
};

export default defineComponent({
  name,

  props: {
    color: String,
    index: Number,
    rowHeight: String,
    offset: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object as PropType<CalendarDayItem>,
      required: true,
    },
  },

  emits: ['click'],

  setup(props, { emit, slots }) {
    const style = computed(() => {
      const { item, index, color, offset, rowHeight } = props;
      const style: CSSProperties = {
        height: rowHeight,
      };

      if (item.type === 'placeholder') {
        style.width = '100%';
        return style;
      }

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

    const renderTopInfo = () => {
      const { topInfo } = props.item;

      if (topInfo || slots['top-info']) {
        return (
          <div class={bem('top-info')}>
            {slots['top-info'] ? slots['top-info'](props.item) : topInfo}
          </div>
        );
      }
    };

    const renderBottomInfo = () => {
      const { bottomInfo } = props.item;

      if (bottomInfo || slots['bottom-info']) {
        return (
          <div class={bem('bottom-info')}>
            {slots['bottom-info']
              ? slots['bottom-info'](props.item)
              : bottomInfo}
          </div>
        );
      }
    };

    const renderContent = () => {
      const { item, color, rowHeight } = props;
      const { type, text } = item;

      const Nodes = [renderTopInfo(), text, renderBottomInfo()];

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
          tabindex={type === 'disabled' ? undefined : -1}
          onClick={onClick}
        >
          {renderContent()}
        </div>
      );
    };
  },
});
