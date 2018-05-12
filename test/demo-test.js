import { renderToString } from '@vue/server-test-utils';
import '../docs/src/demo-common';
import { Locale } from '../packages';
import { camelize } from '../packages/utils';
import Vue from 'vue';

const empty = {
  template: '<div><slot></slot></div>',
  inheritAttrs: false
};
Vue.component('demo-block', empty);
Vue.component('demo-section', empty);

export default function(component) {
  const name = typeof component === 'string' ? component : component.name.replace('van-', '');

  test(`renders ${name} correctly`, () => {
    const demo = require(`../packages/${name}/demo`).default;
    const { i18n } = demo;
    demo.name = 'demo-' + name;

    if (i18n) {
      const formattedI18n = {};
      const camelizedName = camelize(demo.name);
      Object.keys(i18n).forEach(key => {
        formattedI18n[key] = { [camelizedName]: i18n[key] };
      });
      Locale.add(formattedI18n);
    }

    const wrapper = renderToString(demo);
    expect(wrapper).toMatchSnapshot();
  });
}
