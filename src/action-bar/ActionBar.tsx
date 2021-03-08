import { defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('action-bar');

export const ACTION_BAR_KEY = Symbol('ActionBar');

export default defineComponent({
  name,

  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    const { linkChildren } = useChildren(ACTION_BAR_KEY);

    linkChildren();

    return () => (
      <div class={bem({ unfit: !props.safeAreaInsetBottom })}>
        {slots.default?.()}
      </div>
    );
  },
});
