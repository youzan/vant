import { h } from 'vue';
import Locale from '../src/locale';
import enUS from '../src/locale/lang/en-US';
import { mount, later } from '.';
import { DemoLocaleMixin } from '../docs/site/demo-locale';

Locale.use('en-US', enUS);

const EmptyComponent = {
  render() {
    return h('div', [this.$slots.default()]);
  },
  inheritAttrs: false,
};

export function snapshotDemo(Demo: any, option: any = {}) {
  test('should render demo and match snapshot', async () => {
    if (option.beforeTest) {
      option.beforeTest();
    }

    if (Demo.i18n) {
      Locale.add(Demo.i18n);
    }

    const wrapper = mount(Demo, {
      global: {
        mixins: [DemoLocaleMixin],
        components: {
          'demo-block': EmptyComponent,
        },
        plugins: [(window as any).vant],
      },
    });

    await later();

    expect(wrapper.html()).toMatchSnapshot();

    if (option.afterTest) {
      option.afterTest();
    }
  });
}
