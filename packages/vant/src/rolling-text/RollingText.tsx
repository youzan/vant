import {
  ref,
  defineComponent,
  computed,
  watch,
  type ExtractPropTypes,
} from 'vue';

// Utils
import { raf } from '@vant/use';
import {
  createNamespace,
  makeArrayProp,
  makeNumberProp,
  makeStringProp,
  truthProp,
} from '../utils';

// Composables
import { useExpose } from '../composables/use-expose';

// Components
import RollingTextItem from './RollingTextItem';

// Types
import {
  RollingTextDirection,
  RollingTextStopOrder,
  RollingTextExpose,
} from './types';

const [name, bem] = createNamespace('rolling-text');

export const rollingTextProps = {
  startNum: makeNumberProp(0),
  targetNum: Number,
  textArray: makeArrayProp<string>(),
  duration: makeNumberProp(2),
  autoStart: truthProp,
  direction: makeStringProp<RollingTextDirection>('down'),
  stopOrder: makeStringProp<RollingTextStopOrder>('ltr'),
  height: makeNumberProp(40),
};

const CIRCLE_NUM = 2;

export type RollingTextProps = ExtractPropTypes<typeof rollingTextProps>;

export default defineComponent({
  name,

  props: rollingTextProps,

  setup(props) {
    const isCustomType = computed(
      () => Array.isArray(props.textArray) && props.textArray.length
    );

    const getTextArrByIdx = (idx: number) => {
      if (!isCustomType.value) return [];
      const result = [];
      for (let i = 0; i < props.textArray.length; i++) {
        result.push(props.textArray[i][idx]);
      }
      return result;
    };

    const targetNumArr = computed(() => {
      if (isCustomType.value)
        return props.textArray[props.textArray.length - 1].split('');
      return `${props.targetNum}`.split('');
    });

    const startNumArr = () => {
      const arr = `${props.startNum}`.split('');
      while (arr.length < targetNumArr.value.length) {
        arr.unshift('0');
      }
      return arr;
    };

    const getTwoFigure = (i: number) => [
      startNumArr()[i],
      targetNumArr.value[i],
    ];

    const getFigureArr = (i: number) => {
      const [start, target] = getTwoFigure(i);
      const result = [];
      for (let i = +start; i <= 9; i++) {
        result.push(i);
      }
      for (let i = 0; i <= CIRCLE_NUM; i++) {
        for (let j = 0; j <= 9; j++) {
          result.push(j);
        }
      }
      for (let i = 0; i <= +target; i++) {
        result.push(i);
      }
      return result;
    };

    const getDelay = (i: number, len: number) => {
      if (props.stopOrder === 'ltr') return 0.2 * i;
      return 0.2 * (len - 1 - i);
    };

    const rolling = ref(props.autoStart);

    const start = () => {
      rolling.value = true;
    };

    const reset = () => {
      rolling.value = false;

      if (props.autoStart) {
        raf(() => start());
      }
    };

    watch(
      () => props.autoStart,
      (value) => {
        if (value) {
          start();
        }
      }
    );

    useExpose<RollingTextExpose>({
      start,
      reset,
    });

    return () => (
      <div class={bem()}>
        {targetNumArr.value.map((figure, i) => (
          <RollingTextItem
            figureArr={
              isCustomType.value ? getTextArrByIdx(i) : getFigureArr(i)
            }
            duration={props.duration}
            direction={props.direction}
            isStart={rolling.value}
            height={props.height}
            delay={getDelay(i, targetNumArr.value.length)}
          />
        ))}
      </div>
    );
  },
});
