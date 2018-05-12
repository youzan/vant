import Vue from 'vue';
import { renderToString } from '@vue/server-test-utils';
import '../docs/src/demo-common';
import { Locale } from '../packages';

const empty = {
  template: '<div><slot></slot></div>',
  inheritAttrs: false
};
Vue.component('demo-block', empty);
Vue.component('demo-section', empty);

export default function(Demo) {
  test(`renders demo correctly`, () => {
    if (Demo.i18n) {
      Locale.add(Demo.i18n);
    }

    expect(renderToString(Demo)).toMatchSnapshot();
  });
}
