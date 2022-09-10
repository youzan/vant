import { defineComponent, ref, type ExtractPropTypes } from 'vue';
import { truthProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';
import { usePlaceholder } from '../composables/use-placeholder';

const [name, bem] = createNamespace('action-bar');

export const ACTION_BAR_KEY = Symbol(name);

export const actionBarProps = {
  placeholder: Boolean,
  safeAreaInsetBottom: truthProp,
};

export type ActionBarProps = ExtractPropTypes<typeof actionBarProps>;

export default defineComponent({
  name,

  props: actionBarProps,

  setup(props, { slots }) {
    const root = ref<HTMLElement>();
    const renderPlaceholder = usePlaceholder(root, bem);
    const { linkChildren } = useChildren(ACTION_BAR_KEY);

    linkChildren();

    const renderActionBar = () => (
      <div
        ref={root}
        class={[bem(), { 'van-safe-area-bottom': props.safeAreaInsetBottom }]}
      >
        {slots.default?.()}
      </div>
    );

    return () => {
      if (props.placeholder) {
        return renderPlaceholder(renderActionBar);
      }
      return renderActionBar();
    };
  },
});
