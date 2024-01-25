import { defineComponent, type InjectionKey, type ExtractPropTypes } from 'vue';

// Utils
import { truthProp, createNamespace } from '../utils';

// Composables
import { useChildren } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { RollingTextGroupExpose } from './types';

const [name, bem] = createNamespace('rolling-text-group');

export const rollingTextGroupProps = {
  autoStart: truthProp,
};

export type RollingTextGroupProps = ExtractPropTypes<
  typeof rollingTextGroupProps
>;
export type RollingTextGroupProvide = {
  props: RollingTextGroupProps;
};
export const ROLLING_TEXT_KEY: InjectionKey<RollingTextGroupProvide> =
  Symbol(name);

export default defineComponent({
  name,

  props: rollingTextGroupProps,

  setup(props, { slots }) {
    const { children, linkChildren } = useChildren(ROLLING_TEXT_KEY);

    linkChildren({
      props,
    });

    const start = () => {
      children.map((ins) => {
        ins.start();
      });
    };

    useExpose<RollingTextGroupExpose>({
      start,
    });

    if (slots.default) {
      return () => <div class={bem()}>{slots.default!()}</div>;
    }
  },
});
