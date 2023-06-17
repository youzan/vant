import { defineComponent, computed } from 'vue';

// Utils
import {
  createNamespace,
  makeNumberProp,
  makeArrayProp,
  addUnit,
} from '../utils';

export const props = {
  figureArr: makeArrayProp(),
  delay: Number,
  duration: makeNumberProp(2),
  isStart: Boolean,
  direction: String,
  height: makeNumberProp(40),
};

export default defineComponent({
  name: 'RollSingle',

  props,

  setup(props) {
    const downConfig = {
      classNameSpace: 'roll-single-down',
      aniClass: 'van-roll-single-down__ani',
      dataHandle: () => props.figureArr.slice().reverse(),
    };
    const upConfig = {
      classNameSpace: 'roll-single-up',
      aniClass: 'van-roll-single-up__ani',
      dataHandle: () => props.figureArr,
    };
    const directionConfig = props.direction === 'down' ? downConfig : upConfig;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, bem] = createNamespace(directionConfig.classNameSpace);

    const newFigureArr = computed(directionConfig.dataHandle);
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
      <div style={getStyle()} class={[bem(), 'van-roll-single']}>
        <div
          class={[bem('box'), { [directionConfig.aniClass]: props.isStart }]}
        >
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
