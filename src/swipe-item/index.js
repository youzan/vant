import { computed, nextTick, onMounted, reactive } from 'vue';
import { SWIPE_KEY } from '../swipe';
import { createNamespace } from '../utils';
import { useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';

const [createComponent, bem] = createNamespace('swipe-item');

export default createComponent({
  setup(props, { slots }) {
    let rendered;
    const state = reactive({
      offset: 0,
      inited: false,
      mounted: false,
    });

    const { parent, index } = useParent(SWIPE_KEY);

    const style = computed(() => {
      const style = {};
      const { vertical } = parent.props;

      if (parent.size.value) {
        style[vertical ? 'height' : 'width'] = `${parent.size.value}px`;
      }

      if (state.offset) {
        style.transform = `translate${vertical ? 'Y' : 'X'}(${state.offset}px)`;
      }

      return style;
    });

    const shouldRender = computed(() => {
      const { loop, lazyRender } = parent.props;

      if (!lazyRender || rendered) {
        return true;
      }

      // wait for all item to mount, so we can get the exact count
      if (!state.mounted) {
        return false;
      }

      const active = parent.activeIndicator.value;
      const maxActive = parent.count.value - 1;
      const prevActive = active === 0 && loop ? maxActive : active - 1;
      const nextActive = active === maxActive && loop ? 0 : active + 1;
      rendered =
        index.value === active ||
        index.value === prevActive ||
        index.value === nextActive;

      return rendered;
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
