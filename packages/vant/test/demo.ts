import { h, defineComponent, createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import Locale from '../src/locale';
import { mount, later } from '.';
import { initDemoLocale } from '../docs/site';

initDemoLocale();

const EmptyComponent = defineComponent({
  inheritAttrs: false,
  render() {
    return h('div', [this.$slots.default?.()]);
  },
});

type SnapshotDemoOptions = {
  ssr?: boolean;
  beforeTest?: () => void;
  afterTest?: () => void;
};

export function snapshotDemo(Demo: any, option: SnapshotDemoOptions = {}) {
  test('should render demo and match snapshot', async () => {
    if (option.beforeTest) {
      option.beforeTest();
    }

    if (Demo.i18n) {
      Locale.add(Demo.i18n);
    }

    if (option.ssr) {
      const app = createSSRApp(Demo);
      app.component('DemoBlock', EmptyComponent);
      const html = await renderToString(app);

      expect(html).toMatchSnapshot();
    } else {
      const wrapper = mount(Demo, {
        global: {
          components: {
            'demo-block': EmptyComponent,
          },
        },
        attachTo: document.body,
      });

      await later();

      expect(wrapper.html()).toMatchSnapshot();
    }

    if (option.afterTest) {
      option.afterTest();
    }
  });
}
