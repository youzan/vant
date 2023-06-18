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
        : props.figureArr
    );
    const totalHeight = computed(
      () => props.height * props.figureArr.length - props.height
    );
    const translateValPx = computed(() => `-${totalHeight.value}px`);

    const itemStyleObj = {
      lineHeight: addUnit(props.height),
    };

    const getStyle = () => ({
      height: addUnit(props.height),
      '--van-translate': translateValPx.value,
      '--van-duration': props.duration + 's',
      '--van-delay': props.delay + 's',
    });

    return () => (
      <div class={bem([props.direction])} style={getStyle()}>
        <div class={bem('box', { animate: props.isStart })}>
          {Array.isArray(newFigureArr.value) &&
            newFigureArr.value.map((figure) => (
              <div class={bem('item')} style={itemStyleObj}>
                {figure}
              </div>
            ))}
        </div>
      </div>
    );
  },
});
