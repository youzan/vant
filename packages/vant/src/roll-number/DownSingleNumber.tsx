import { defineComponent, computed } from 'vue';

// Utils
import {
  createNamespace,
  makeNumberProp,
  makeArrayProp,
  addUnit,
} from '../utils';

const [name, bem] = createNamespace('roll-single-down');

export const props = {
  figureArr: makeArrayProp(),
  delay: Number,
  duration: makeNumberProp(2),
  isStart: Boolean,
};

const HEIGHT = 40;

export default defineComponent({
  name,

  props,

  setup(props) {
    const reverseFigureArr = computed(() => props.figureArr.slice().reverse());
    const totalHeight = computed(
      () => HEIGHT * props.figureArr.length - HEIGHT
    );
    const translateValPx = computed(() => `-${totalHeight.value}px`);
    const itemStyleObj = {
      lineHeight: addUnit(HEIGHT),
    };

    const getStyle = () => ({
      height: addUnit(HEIGHT),
      '--van-translate': translateValPx.value,
      '--van-duration': props.duration + 's',
      '--van-delay': props.delay + 's',
    });

    return () => (
      <div style={getStyle()} class={[bem(), 'van-roll-single']}>
        <div
          class={[bem('box'), { 'van-roll-single-down__ani': props.isStart }]}
        >
          {Array.isArray(reverseFigureArr.value) &&
            reverseFigureArr.value.map((figure) => (
              <div class={bem('item')} style={itemStyleObj}>
                {figure}
              </div>
            ))}
        </div>
      </div>
    );
  },
});
