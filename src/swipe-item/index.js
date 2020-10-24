import { computed, nextTick, onMounted, reactive } from 'vue';
import { SWIPE_KEY } from '../swipe';
import { createNamespace } from '../utils';
import { useParent } from '@vant/use';
import { useExpose } from '../composition/use-expose';

const [createComponent, bem] = createNamespace('swipe-item');

export default createComponent({
  setup(props, { slots }) {
    const state = reactive({
      offset: 0,
      mounted: false,
    });

    const { parent, index } = useParent(SWIPE_KEY);

    const style = computed(() => {
      const style = {};
      const { vertical } = parent.props;

      style[vertical ? 'height' : 'width'] = `${parent.size.value}px`;

      if (state.offset) {
        style.transform = `translate${vertical ? 'Y' : 'X'}(${state.offset}px)`;
      }

      return style;
    });

    const shouldRender = computed(() => {
      if (!parent.props.lazyRender) {
        return true;
      }

      // wait for all item to mount, so we can get the exact count
      if (!state.mounted) {
        return false;
      }

      const active = parent.activeIndicator.value;
      const maxActive = parent.count.value - 1;
      const prevActive = active === 0 ? maxActive : active - 1;
      const nextActive = active === maxActive ? 0 : active + 1;

      return index.value >= prevActive || index.value <= nextActive;
    });

    const setOffset = (offset) => {
      state.offset = offset;
    };

    onMounted(() => {
      nextTick(() => {
        state.mounted = true;
      });
    });

    useExpose({ setOffset });

    return () => (
      <div class={bem()} style={style.value}>
        {shouldRender.value ? slots.default?.() : null}
      </div>
    );
  },
});
