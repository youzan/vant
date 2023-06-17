import { defineComponent, computed, ref, onMounted } from 'vue';

// Utils
import { createNamespace, makeNumberProp, makeArrayProp } from '../utils';

export const props = {
  figureArr: makeArrayProp(),
  delay: Number,
  duration: makeNumberProp(2),
  isStart: Boolean,
  direction: String,
};

export default defineComponent({
  name: 'RollSingle',

  props,

  setup(props) {
    const root = ref<HTMLElement>();

    const singleHeight = ref(40);
    onMounted(() => {
      if (!root.value) return;
      const originStyle = window.getComputedStyle(root.value);
      const heightWithPx = originStyle.getPropertyValue('height');
      singleHeight.value = +(heightWithPx.match(/\d+/)?.[0] || 40);
    });

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
      () => singleHeight.value * props.figureArr.length - singleHeight.value
    );
    const translateValPx = computed(() => `-${totalHeight.value}px`);

    const getStyle = () => ({
      '--van-translate': translateValPx.value,
      '--van-duration': props.duration + 's',
      '--van-delay': props.delay + 's',
    });

    return () => (
      <div ref={root} style={getStyle()} class={[bem(), 'van-roll-single']}>
        <div
          class={[bem('box'), { [directionConfig.aniClass]: props.isStart }]}
        >
          {Array.isArray(newFigureArr.value) &&
            newFigureArr.value.map((figure) => (
              <div class={bem('item')}>{figure}</div>
            ))}
        </div>
      </div>
    );
  },
});
