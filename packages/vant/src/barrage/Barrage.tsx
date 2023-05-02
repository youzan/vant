import { defineComponent, onMounted, ref, type ExtractPropTypes } from 'vue';
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
    const len = ref(props.barrageList.length);

    const createBarrageItem = (
      text: string | number,
      delay: number = props.delay
    ) => {
      const item = document.createElement('span');
      item.className = className;
      item.innerText = String(text);

      item.style.animationDuration = `${props.speed}ms`;
      item.style.animationDelay = `${delay}ms`;
      item.style.animationName = 'barrage';
      item.style.animationTimingFunction = 'linear';

      item.addEventListener('animationend', () => {
        item.remove();
      });
      return item;
    };

    const appendBarrageItem = (item: HTMLSpanElement, i: number) => {
      barrage.value?.append(item);
      const top = (i % +props.rows) * item.offsetHeight + +props.top;
      item.style.top = `${top}px`;
    };

    const initBarrages = () => {
      props.barrageList.forEach((text, i) => {
        const item = createBarrageItem(text, i * props.delay);
        if (!props.autoPlay) {
          item.style.animationPlayState = 'paused';
        }
        appendBarrageItem(item, i);
      });
    };

    onMounted(() => {
      barrage.value?.style.setProperty(
        '--move-distance',
        `-${barrage.value?.offsetWidth}px`
      );
      initBarrages();
    });

    const isPlay = ref<boolean>(true);

    const add = (text: string | number) => {
      if (!isPlay.value) return;
      const item = createBarrageItem(text);
      barrage.value?.append(item);
      len.value++;
      appendBarrageItem(item, len.value);
    };

    const play = () => {
      isPlay.value = true;
      barrage.value
        ?.querySelectorAll<HTMLSpanElement>(`.${className}`)
        .forEach((item) => {
          item.style.animationPlayState = 'running';
        });
    };

    const pause = () => {
      isPlay.value = false;
      barrage.value
        ?.querySelectorAll<HTMLSpanElement>(`.${className}`)
        .forEach((item) => {
          item.style.animationPlayState = 'paused';
        });
    };

    useExpose<BarrageExpose>({
      play,
      pause,
      add,
    });

    return () => (
      <div class={bem()} ref={barrage}>
        {slots.default?.()}
      </div>
    );
  },
});
