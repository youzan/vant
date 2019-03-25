import Vue from 'vue';
import '../docs/src/demo-common';
import Locale from '../packages/locale';
import { renderToString } from '@vue/server-test-utils';

const empty = {
  template: '<div><slot></slot></div>',
  inheritAttrs: false
};

Vue.component('demo-block', empty);
Vue.component('demo-section', empty);

export default function (Demo: any) {
  test('renders demo correctly', () => {
    if (Demo.i18n) {
      Locale.add(Demo.i18n);
    }

    expect(renderToString(Demo)).toMatchSnapshot();
  });
}
