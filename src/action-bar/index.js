import { createNamespace } from '../utils';
import { useParent } from '../api/use-relation';

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
    useParent(ACTION_BAR_KEY);

    return () => (
      <div class={bem({ unfit: !props.safeAreaInsetBottom })}>
        {slots.default?.()}
      </div>
    );
  },
});
