import { defineComponent, ExtractPropTypes } from 'vue';
import { truthProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('action-bar');

export const ACTION_BAR_KEY = Symbol(name);

const actionBarProps = {
  safeAreaInsetBottom: truthProp,
};

export type ActionBarProps = ExtractPropTypes<typeof actionBarProps>;

export default defineComponent({
  name,

  props: actionBarProps,

  setup(props, { slots }) {
    const { linkChildren } = useChildren(ACTION_BAR_KEY);

    linkChildren();

    return () => (
      <div
        class={[bem(), { 'van-safe-area-bottom': props.safeAreaInsetBottom }]}
      >
        {slots.default?.()}
      </div>
    );
  },
});
