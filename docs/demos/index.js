// This file is auto gererated by build/bin/build-entry.js
import './common';

function wrapper(component, name) {
  component = component.default;
  component.name = 'demo-' + name;
  return component;
}

export default {
  'actionsheet': r => require.ensure([], () => r(wrapper(require('./views/actionsheet'), 'actionsheet')), 'actionsheet'),
  'address-edit': r => require.ensure([], () => r(wrapper(require('./views/address-edit'), 'address-edit')), 'address-edit'),
  'address-list': r => require.ensure([], () => r(wrapper(require('./views/address-list'), 'address-list')), 'address-list'),
  'area': r => require.ensure([], () => r(wrapper(require('./views/area'), 'area')), 'area'),
  'badge': r => require.ensure([], () => r(wrapper(require('./views/badge'), 'badge')), 'badge'),
  'button': r => require.ensure([], () => r(wrapper(require('./views/button'), 'button')), 'button'),
  'card': r => require.ensure([], () => r(wrapper(require('./views/card'), 'card')), 'card'),
  'cell-swipe': r => require.ensure([], () => r(wrapper(require('./views/cell-swipe'), 'cell-swipe')), 'cell-swipe'),
  'cell': r => require.ensure([], () => r(wrapper(require('./views/cell'), 'cell')), 'cell'),
  'checkbox': r => require.ensure([], () => r(wrapper(require('./views/checkbox'), 'checkbox')), 'checkbox'),
  'contact': r => require.ensure([], () => r(wrapper(require('./views/contact'), 'contact')), 'contact'),
  'coupon': r => require.ensure([], () => r(wrapper(require('./views/coupon'), 'coupon')), 'coupon'),
  'datetime-picker': r => require.ensure([], () => r(wrapper(require('./views/datetime-picker'), 'datetime-picker')), 'datetime-picker'),
  'dialog': r => require.ensure([], () => r(wrapper(require('./views/dialog'), 'dialog')), 'dialog'),
  'field': r => require.ensure([], () => r(wrapper(require('./views/field'), 'field')), 'field'),
  'goods-action': r => require.ensure([], () => r(wrapper(require('./views/goods-action'), 'goods-action')), 'goods-action'),
  'icon': r => require.ensure([], () => r(wrapper(require('./views/icon'), 'icon')), 'icon'),
  'image-preview': r => require.ensure([], () => r(wrapper(require('./views/image-preview'), 'image-preview')), 'image-preview'),
  'layout': r => require.ensure([], () => r(wrapper(require('./views/layout'), 'layout')), 'layout'),
  'lazyload': r => require.ensure([], () => r(wrapper(require('./views/lazyload'), 'lazyload')), 'lazyload'),
  'loading': r => require.ensure([], () => r(wrapper(require('./views/loading'), 'loading')), 'loading'),
  'nav-bar': r => require.ensure([], () => r(wrapper(require('./views/nav-bar'), 'nav-bar')), 'nav-bar'),
  'notice-bar': r => require.ensure([], () => r(wrapper(require('./views/notice-bar'), 'notice-bar')), 'notice-bar'),
  'number-keyboard': r => require.ensure([], () => r(wrapper(require('./views/number-keyboard'), 'number-keyboard')), 'number-keyboard'),
  'panel': r => require.ensure([], () => r(wrapper(require('./views/panel'), 'panel')), 'panel'),
  'password-input': r => require.ensure([], () => r(wrapper(require('./views/password-input'), 'password-input')), 'password-input'),
  'picker': r => require.ensure([], () => r(wrapper(require('./views/picker'), 'picker')), 'picker'),
  'popup': r => require.ensure([], () => r(wrapper(require('./views/popup'), 'popup')), 'popup'),
  'progress': r => require.ensure([], () => r(wrapper(require('./views/progress'), 'progress')), 'progress'),
  'pull-refresh': r => require.ensure([], () => r(wrapper(require('./views/pull-refresh'), 'pull-refresh')), 'pull-refresh'),
  'radio': r => require.ensure([], () => r(wrapper(require('./views/radio'), 'radio')), 'radio'),
  'search': r => require.ensure([], () => r(wrapper(require('./views/search'), 'search')), 'search'),
  'sku': r => require.ensure([], () => r(wrapper(require('./views/sku'), 'sku')), 'sku'),
  'stepper': r => require.ensure([], () => r(wrapper(require('./views/stepper'), 'stepper')), 'stepper'),
  'steps': r => require.ensure([], () => r(wrapper(require('./views/steps'), 'steps')), 'steps'),
  'submit-bar': r => require.ensure([], () => r(wrapper(require('./views/submit-bar'), 'submit-bar')), 'submit-bar'),
  'swipe': r => require.ensure([], () => r(wrapper(require('./views/swipe'), 'swipe')), 'swipe'),
  'switch-cell': r => require.ensure([], () => r(wrapper(require('./views/switch-cell'), 'switch-cell')), 'switch-cell'),
  'switch': r => require.ensure([], () => r(wrapper(require('./views/switch'), 'switch')), 'switch'),
  'tab': r => require.ensure([], () => r(wrapper(require('./views/tab'), 'tab')), 'tab'),
  'tabbar': r => require.ensure([], () => r(wrapper(require('./views/tabbar'), 'tabbar')), 'tabbar'),
  'tag': r => require.ensure([], () => r(wrapper(require('./views/tag'), 'tag')), 'tag'),
  'toast': r => require.ensure([], () => r(wrapper(require('./views/toast'), 'toast')), 'toast'),
  'tree-select': r => require.ensure([], () => r(wrapper(require('./views/tree-select'), 'tree-select')), 'tree-select'),
  'uploader': r => require.ensure([], () => r(wrapper(require('./views/uploader'), 'uploader')), 'uploader'),
  'waterfall': r => require.ensure([], () => r(wrapper(require('./views/waterfall'), 'waterfall')), 'waterfall')
};
