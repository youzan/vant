import Vue from 'vue';

export const isServer = Vue.prototype.$isServer;

export function isDef(value) {
  return value !== undefined && value !== null;
}

export function get(object, path) {
  const keys = path.split('.');
  let result = object;

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

const camelizeRE = /-(\w)/g;
export function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
}

export function isAndroid() {
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}
