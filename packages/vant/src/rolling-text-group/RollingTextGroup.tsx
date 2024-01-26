import { defineComponent, type InjectionKey, type ExtractPropTypes } from 'vue';

// Utils
import {
  truthProp,
  makeNumberProp,
  makeStringProp,
  createNamespace,
} from '../utils';

// Composables
import { useChildren } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { RollingTextGroupExpose } from './types';
import { RollingTextDirection, RollingTextStopOrder } from '../rolling-text';

const [name, bem] = createNamespace('rolling-text-group');

export const rollingTextGroupProps = {
  startNum: makeNumberProp(0),
  duration: makeNumberProp(2),
  autoStart: truthProp,
  direction: makeStringProp<RollingTextDirection>('down'),
  stopOrder: makeStringProp<RollingTextStopOrder>('ltr'),
  height: makeNumberProp(40),
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

    const reset = () => {
      children.map((ins) => {
        ins.reset();
      });
    };

    useExpose<RollingTextGroupExpose>({
      start,
      reset,
    });

    if (slots.default) {
      return () => <div class={bem()}>{slots.default!()}</div>;
    }
  },
});
