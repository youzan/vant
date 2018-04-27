import glob from 'glob';
import Vue from 'vue';
import MockDate from 'mockdate';
import moment from 'moment';
import { renderToString } from '@vue/server-test-utils';
import '../docs/demos/common';

Vue.component('demo-section', {
  template: '<slot></slot>'
});

const files = glob.sync('./docs/demos/**/*.vue');

describe('Demo Test', () => {
  files.slice(0, 2).forEach(file => {
    it(`renders ${file} correctly`, () => {
      MockDate.set(moment('2016-01-01'));
      const demo = require(`.${file}`).default;
      const wrapper = renderToString(demo);
      expect(wrapper).toMatchSnapshot();
      MockDate.reset();
    });
  });
});
