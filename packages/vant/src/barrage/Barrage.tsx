import {
  defineComponent,
  onMounted,
  ref,
  type ExtractPropTypes,
  nextTick,
  watch,
  render,
  VNode,
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

export interface BarrageItem {
  id: string | number;
  text: string | number;
}

export const barrageProps = {
  top: makeNumericProp(10),
  rows: makeNumericProp(4),
  duration: makeNumericProp(4000),
  autoPlay: truthProp,
  delay: makeNumberProp(300),
  modelValue: makeArrayProp<BarrageItem>(),
};

export type BarrageProps = ExtractPropTypes<typeof barrageProps>;

const [name, bem] = createNamespace('barrage');

export default defineComponent({
  name,

  props: barrageProps,

  emits: ['update:modelValue'],

  setup(props, { emit, slots }) {
    const barrageWrapper = ref<HTMLDivElement>();
    const total = ref(0);
    const barrageItems: HTMLSpanElement[] = [];
    const isInitBarrage = ref(true);
    const isPlay = ref(props.autoPlay);

    const createBarrageItem = (
      itemData: BarrageItem,
      delay: number = props.delay,
    ) => {
      const applyStyles = (element: HTMLElement) => {
        element.style.animationDuration = `${props.duration}ms`;
        element.style.animationDelay = `${delay}ms`;
        element.style.animationTimingFunction = 'linear';
        element.style.animationName = 'van-barrage';
      };

      const createDefaultItem = (text: string) => {
        return <span class={bem('wrapper__item__default')}>{text}</span>;
      };

      const createWrapItem = (vNode: VNode) => {
        return <div class={bem('wrapper__item')}>{vNode}</div>;
      };

      let vNode;

      if (slots.barrage) {
        // Use slot content
        vNode = slots.barrage({ item: itemData });

        if (!Array.isArray(vNode)) {
          vNode = [vNode]; // Ensure vNode is an array
        }
        vNode = vNode.map(createWrapItem);
      } else {
        // Use default content
        vNode = [createWrapItem(createDefaultItem(String(itemData.text)))];
      }

      const container = (
        <div class={bem('wrapper')}>
          <>{vNode}</>
        </div>
      );

      // Create a temporary container to render the component
      const tempContainer = document.createElement('div');
      render(container, tempContainer);
      applyStyles(tempContainer.firstElementChild as HTMLElement);

      const resultElement = tempContainer.firstElementChild as HTMLElement;

      // Remove the temporary container
      tempContainer.remove();

      return resultElement;
    };

    const appendBarrageItem = (itemData: BarrageItem, i: number) => {
      const { id } = itemData;
      const item = createBarrageItem(
        itemData,
        isInitBarrage.value ? i * props.delay : undefined,
      );

      if (!props.autoPlay && isPlay.value === false) {
        item.style.animationPlayState = 'paused';
      }

      barrageWrapper.value?.append(item);
      total.value++;

      const top =
        ((total.value - 1) % +props.rows) * item.offsetHeight + +props.top;
      item.style.top = `${top}px`;
      item.dataset.id = String(id);
      barrageItems.push(item);

      item.addEventListener('animationend', () => {
        emit(
          'update:modelValue',
          [...props.modelValue].filter((v) => String(v.id) !== item.dataset.id),
        );
      });
    };

    const updateBarrages = (
      newValue: BarrageItem[],
      oldValue: BarrageItem[],
    ) => {
      const map = new Map(oldValue.map((item) => [item.id, item]));

      newValue.forEach((item, i) => {
        if (map.has(item.id)) {
          map.delete(item.id);
        } else {
          // add
          appendBarrageItem(item, i);
        }
      });

      map.forEach((item) => {
        // remove
        const index = barrageItems.findIndex(
          (span) => span.dataset.id === String(item.id),
        );
        if (index > -1) {
          barrageItems[index].remove();
          barrageItems.splice(index, 1);
        }
      });

      isInitBarrage.value = false;
    };

    watch(
      () => props.modelValue.slice(),
      (newValue, oldValue) => updateBarrages(newValue ?? [], oldValue ?? []),
      { deep: true },
    );

    const rootStyle = ref<{
      '--move-distance'?: string;
    }>({});

    onMounted(async () => {
      rootStyle.value['--move-distance'] =
        `-${barrageWrapper.value?.offsetWidth}px`;
      await nextTick();
      updateBarrages(props.modelValue, []);
    });

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
    });

    return () => (
      <div class={bem()} ref={barrageWrapper} style={rootStyle.value}>
        {slots.default?.()}
      </div>
    );
  },
});
