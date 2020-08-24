import { ref, provide } from 'vue';
import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('action-bar');

export const ACTION_BAR_KEY = 'vanActionBar';

export default createComponent({
  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    provide(ACTION_BAR_KEY, {
      children: ref([]),
    });

    return () => (
      <div class={bem({ unfit: !props.safeAreaInsetBottom })}>
        {slots.default?.()}
      </div>
    );
  },
});
