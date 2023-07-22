import { defineComponent, computed } from 'vue';

// Utils
import {
  createNamespace,
  makeNumberProp,
  makeArrayProp,
  makeStringProp,
  addUnit,
} from '../utils';

// Types
import { RollingTextDirection } from './types';

export const props = {
  figureArr: makeArrayProp(),
  delay: Number,
  duration: makeNumberProp(2),
  isStart: Boolean,
  direction: makeStringProp<RollingTextDirection>('down'),
  height: makeNumberProp(40),
};

const [name, bem] = createNamespace('rolling-text-item');

export default defineComponent({
  name,

  props,

  setup(props) {
    const newFigureArr = computed(() =>
      props.direction === 'down'
        ? props.figureArr.slice().reverse()
        : props.figureArr,
    );
    const translatePx = computed(() => {
      const totalHeight = props.height * (props.figureArr.length - 1);
      return `-${totalHeight}px`;
    });
    const itemStyle = computed(() => ({
      lineHeight: addUnit(props.height),
    }));
    const rootStyle = computed(() => ({
      height: addUnit(props.height),
      '--van-translate': translatePx.value,
      '--van-duration': props.duration + 's',
      '--van-delay': props.delay + 's',
    }));

    return () => (
      <div class={bem([props.direction])} style={rootStyle.value}>
        <div class={bem('box', { animate: props.isStart })}>
          {Array.isArray(newFigureArr.value) &&
            newFigureArr.value.map((figure) => (
              <div class={bem('item')} style={itemStyle.value}>
                {figure}
              </div>
            ))}
        </div>
      </div>
    );
  },
});
