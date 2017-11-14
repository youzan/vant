// This file is auto gererated by build/bin/build-entry.js
import './common';

function wrapper(component, name) {
  component = component.default;
  component.name = 'demo-' + name;
  return component;
}

export default {
  'actionsheet': r => require.ensure([], () => r(wrapper(require('./actionsheet'), 'actionsheet')), 'actionsheet'),
  'badge': r => require.ensure([], () => r(wrapper(require('./badge'), 'badge')), 'badge'),
  'button': r => require.ensure([], () => r(wrapper(require('./button'), 'button')), 'button'),
  'card': r => require.ensure([], () => r(wrapper(require('./card'), 'card')), 'card'),
  'cell': r => require.ensure([], () => r(wrapper(require('./cell'), 'cell')), 'cell'),
  'icon': r => require.ensure([], () => r(wrapper(require('./icon'), 'icon')), 'icon'),
  'image-preview': r => require.ensure([], () => r(wrapper(require('./image-preview'), 'image-preview')), 'image-preview'),
  'layout': r => require.ensure([], () => r(wrapper(require('./layout'), 'layout')), 'layout'),
  'lazyload': r => require.ensure([], () => r(wrapper(require('./lazyload'), 'lazyload')), 'lazyload'),
  'loading': r => require.ensure([], () => r(wrapper(require('./loading'), 'loading')), 'loading'),
  'nav-bar': r => require.ensure([], () => r(wrapper(require('./nav-bar'), 'nav-bar')), 'nav-bar'),
  'notice-bar': r => require.ensure([], () => r(wrapper(require('./notice-bar'), 'notice-bar')), 'notice-bar'),
  'panel': r => require.ensure([], () => r(wrapper(require('./panel'), 'panel')), 'panel'),
  'popup': r => require.ensure([], () => r(wrapper(require('./popup'), 'popup')), 'popup')
};
