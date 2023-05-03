import {
  defineComponent,
  onMounted,
  ref,
  type ExtractPropTypes,
  nextTick,
  watch,
} from 'vue';
import { useExpose } from '../composables/use-expose';
import {
  createNamespace,
  makeArrayProp,
  makeNumberProp,
  makeNumericProp,
  truthProp,
} from '../utils';
import { BarrageExpose } from './types';

export const barrageProps = {
  top: makeNumericProp(10),
  rows: makeNumericProp(4),
  speed: makeNumericProp(4000),
  autoPlay: truthProp,
  delay: makeNumberProp(500),
  barrageList: makeArrayProp<string | number>(),
};

export type BarrageProps = ExtractPropTypes<typeof barrageProps>;

const [name, bem] = createNamespace('barrage');

export default defineComponent({
  name,

  props: barrageProps,

  setup(props, { slots }) {
    const barrage = ref<HTMLDivElement>();
    const className = bem('item') as string;
    const barrageIndex = ref(0);
    const barrageItems: HTMLSpanElement[] = [];
    const isInit = ref(false);

    const createBarrageItem = (
      text: string | number,
      delay: number = props.delay
    ) => {
      const item = document.createElement('span');
      item.className = className;
      item.innerText = String(text);

      item.style.animationDuration = `${props.speed}ms`;
      item.style.animationDelay = `${delay}ms`;
      item.style.animationName = 'van-barrage';
      item.style.animationTimingFunction = 'linear';

      return item;
    };

    const appendBarrageItem = (item: HTMLSpanElement, i: number) => {
      barrage.value?.append(item);
      const top = (i % +props.rows) * item.offsetHeight + +props.top;
      item.style.top = `${top}px`;
      item.dataset.index = String(i);
      barrageItems.push(item);

      item.addEventListener('animationend', () => {
        const itemIndex = barrageItems.findIndex(
          (item) => item.dataset.index === String(i)
        );
        barrageItems.splice(itemIndex, 1);
        item.remove();
      });

      barrageIndex.value++;
    };

    const initBarrages = () => {
      if (props.barrageList.length > 0) {
        props.barrageList.forEach((text, i) => {
          const item = createBarrageItem(text, i * props.delay);
          if (!props.autoPlay) {
            item.style.animationPlayState = 'paused';
          }
          appendBarrageItem(item, i);
        });
        // once use props.barrageList
        isInit.value = true;
      }
    };

    const rootStyle = ref<{
      '--move-distance'?: string;
    }>({});

    onMounted(async () => {
      rootStyle.value['--move-distance'] = `-${barrage.value?.offsetWidth}px`;
      await nextTick();
      initBarrages();
    });

    watch(
      () => props.barrageList,
      () => {
        !isInit.value && initBarrages();
      }
    );

    const isPlay = ref(true);

    const add = (text: string | number) => {
      if (!isPlay.value) return;
      const item = createBarrageItem(text);
      appendBarrageItem(item, barrageIndex.value);
    };

    const play = () => {
      isPlay.value = true;
      barrageItems.forEach((item) => {
        item.style.animationPlayState = 'running';
      });
    };

    const pause = () => {
      isPlay.value = false;
      barrageItems.forEach((item) => {
        item.style.animationPlayState = 'paused';
      });
    };

    useExpose<BarrageExpose>({
      play,
      pause,
      add,
    });

    return () => (
      <div class={bem()} ref={barrage} style={rootStyle.value}>
        {slots.default?.()}
      </div>
    );
  },
});
