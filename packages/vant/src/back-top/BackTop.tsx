import {
  ref,
  computed,
  Teleport,
  onMounted,
  defineComponent,
  type ExtractPropTypes,
} from 'vue';

// Utils
import { getScrollTop, createNamespace, makeNumericProp } from '../utils';

import { throttle } from '../lazyload/vue-lazyload/util';

// Composables
import { useEventListener } from '@vant/use';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('back-top');

export const backTopProps = {
  right: makeNumericProp(30),
  bottom: makeNumericProp(40),
  target: String,
  visibilityHeight: makeNumericProp(200),
};

export type BackTopProps = ExtractPropTypes<typeof backTopProps>;

export default defineComponent({
  name,

  props: backTopProps,

  emits: ['click'],

  setup(props, { emit, slots }) {
    const show = ref(false);
    const scrolleParent = ref<Document | HTMLElement>();

    let target: HTMLElement | Window;

    const backTopStyle = computed(() => ({
      right: `${props.right}px`,
      bottom: `${props.bottom}px`,
    }));

    const onClick = (event: MouseEvent) => {
      emit('click', event);
      target.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const scroll = () => {
      show.value = getScrollTop(target) >= props.visibilityHeight;
    };

    const throttleScroll = throttle(scroll, 300);

    useEventListener('scroll', throttleScroll, { target: scrolleParent });
    onMounted(() => {
      scrolleParent.value = document;
      target = document.documentElement;

      if (props.target) {
        target = document.querySelector<HTMLElement>(props.target)!;
        if (!target) {
          throw Error('[Vant] BackTop: target element is not found.');
        }
        scrolleParent.value = target;
      }
    });

    return () => (
      <Teleport to="body">
        <div
          class={bem({ active: show.value })}
          style={backTopStyle.value}
          onClick={onClick}
        >
          {slots.default ? slots.default() : <Icon name="back-top" />}
        </div>
      </Teleport>
    );
  },
});
