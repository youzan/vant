/**
 * Demo Common Mixin && i18n
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import VantDoc, { DemoBlock, DemoSection } from '@vant/doc';
import i18n from './utils/i18n';
import Vant, { Lazyload, Locale } from '../../packages';
import { camelize } from '../../packages/utils';

Vue
  .use(Vant)
  .use(VantDoc)
  .use(VueRouter)
  .use(Lazyload, {
    lazyComponent: true
  });

Vue.mixin(i18n);
Vue.component('demo-block', DemoBlock);
Vue.component('demo-section', DemoSection);

Locale.add({
  'zh-CN': {
    add: '增加',
    decrease: '减少',
    red: '红色',
    orange: '橙色',
    yellow: '黄色',
    purple: '紫色',
    tab: '标签',
    tag: '标签',
    desc: '描述信息',
    back: '返回',
    title: '标题',
    status: '状态',
    button: '按钮',
    option: '选项',
    search: '搜索',
    content: '内容',
    custom: '自定义',
    username: '用户名',
    password: '密码',
    disabled: '禁用状态',
    uneditable: '不可编辑',
    basicUsage: '基础用法',
    advancedUsage: '高级用法',
    loadingStatus: '加载状态',
    usernamePlaceholder: '请输入用户名',
    passwordPlaceholder: '请输入密码'
  },
  'en-US': {
    add: 'Add',
    decrease: 'Decrease',
    red: 'Red',
    orange: 'Orange',
    yellow: 'Yellow',
    purple: 'Purple',
    tab: 'Tab',
    tag: 'Tag',
    desc: 'Description',
    back: 'Back',
    title: 'Title',
    status: 'Status',
    button: 'Button',
    option: 'Option',
    search: 'Search',
    content: 'Content',
    custom: 'Custom',
    username: 'Username',
    password: 'Password',
    loadingStatus: 'Loading',
    disabled: 'Disabled',
    uneditable: 'Uneditable',
    basicUsage: 'Basic Usage',
    advancedUsage: 'Advanced Usage',
    usernamePlaceholder: 'Username',
    passwordPlaceholder: 'Password'
  }
});

export function wrapper(promise, name) {
  return promise.then(component => {
    component = component.default;
    name = 'demo-' + name;
    component.name = name;
    const { i18n: config } = component;
    if (config) {
      const formattedI18n = {};
      const camelizedName = camelize(name);
      Object.keys(config).forEach(key => {
        formattedI18n[key] = { [camelizedName]: config[key] };
      });
      Locale.add(formattedI18n);
    }
    return component;
  });
}
