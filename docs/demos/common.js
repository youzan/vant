import Vue from 'vue';
import { Locale, Toast, Dialog } from 'packages';
import { DemoBlock, DemoSection } from 'vant-doc';
import camelize from 'packages/utils/camelize';

const demoBaseMixin = {
  beforeCreate() {
    const { name, i18n } = this.$options;
    if (name && i18n) {
      const formattedI18n = {};
      const camelizedName = camelize(name);
      Object.keys(i18n).forEach(key => {
        formattedI18n[key] = { [camelizedName]: i18n[key] };
      });
      Locale.add(formattedI18n);
    }
  }
};

window.Toast = Toast;
window.Dialog = Dialog;
Vue.mixin(Locale.i18n);
Vue.mixin(demoBaseMixin);
Vue.component('demo-block', DemoBlock);
Vue.component('demo-section', DemoSection);

Locale.add({
  'zh-CN': {
    tag: '标签',
    desc: '描述信息',
    back: '返回',
    title: '标题',
    status: '状态',
    button: '按钮',
    option: '选项',
    content: '内容',
    basicUsage: '基础用法',
    advancedUsage: '高级用法'
  },
  'en-US': {
    tag: 'Tag',
    desc: 'Description',
    back: 'Back',
    title: 'Title',
    status: 'Status',
    button: 'Button',
    option: 'Option',
    content: 'Content',
    basicUsage: 'Basic Usage',
    advancedUsage: 'Advanced Usage'
  }
});
