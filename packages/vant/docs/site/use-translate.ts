import Locale from '../../src/locale';
import enUS from '../../src/locale/lang/en-US';
import { camelize, createTranslate } from '../../src/utils';
import type { App } from 'vue';
import type { Router } from 'vue-router';

declare global {
  interface Window {
    app: App;
    vueRouter: Router;
  }
}

export function initDemoLocale() {
  Locale.add({
    'en-US': enUS,
  });

  // switch lang after routing
  if (window.vueRouter) {
    window.vueRouter.afterEach((to) => {
      const { lang } = to.meta || {};

      if (lang) {
        Locale.use(lang as string);
      }
    });
  }

  // add some basic locale messages
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
      passwordPlaceholder: '请输入密码',
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
      passwordPlaceholder: 'Password',
    },
  });
}

initDemoLocale();

let demoUid = 0;

export function useTranslate(i18n: Record<string, any>) {
  const demoName = `demo-i18n-${demoUid++}`;

  if (i18n) {
    const locales: Record<string, any> = {};
    const camelizedName = camelize(demoName);

    Object.keys(i18n).forEach((key) => {
      locales[key] = { [camelizedName]: i18n[key] };
    });

    Locale.add(locales);
  }

  return createTranslate(demoName);
}
