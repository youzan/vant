import Vue, { CreateElement } from 'vue';
import '../docs/site/entry';
import Locale from '../src/locale';
import { mount, later } from '.';

const Empty = {
  render(h: CreateElement): ReturnType<CreateElement> {
    return h('div', [(this as any).$slots.default]);
  },
  inheritAttrs: false,
};

Vue.component('demo-block', Empty);
Vue.component('demo-section', Empty);

export function snapshotDemo(Demo: any, option: any = {}) {
  test('renders demo correctly', async () => {
    if (option.beforeTest) {
      option.beforeTest();
    }

    if (Demo.i18n) {
      Locale.add(Demo.i18n);
    }

    const wrapper = mount(Demo);

    await later();

    expect(wrapper).toMatchSnapshot();

    if (option.afterTest) {
      option.afterTest();
    }
  });
}
