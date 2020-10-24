import { h } from 'Vue';
import Locale from '../src/locale';
import { mount, later } from '.';
import { DemoLocaleMixin } from '../docs/site/demo-locale';

const EmptyComponent = {
  render() {
    return h('div', [(this as any).$slots.default()]);
  },
  inheritAttrs: false,
};

export function snapshotDemo(Demo: any, option: any = {}) {
  test('renders demo correctly', async () => {
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
          'demo-section': EmptyComponent,
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
