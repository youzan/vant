import { defineComponent, type InjectionKey } from 'vue';

// Utils
import { createNamespace } from '../utils';

// Composables
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('rolling-text-group');

export type RollingTextGroupProvide = Record<string, string>;
export const ROLLING_TEXT_GROUP_KEY: InjectionKey<RollingTextGroupProvide> =
  Symbol(name);

export default defineComponent({
  name,

  setup(_, { slots }) {
    const { children, linkChildren } = useChildren(ROLLING_TEXT_GROUP_KEY);
    linkChildren();

    const start = () => {
      children.map(ins => {
        ins.start()
      })
    };
    if (slots.default) {
      return () => (
        <div class={bem()}>
          <button onClick={start}>start</button>
          {slots.default!()}
        </div>
      );
    }
  },
});
