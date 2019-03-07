/* eslint-disable no-use-before-define */
import { isDef, isObj } from '.';

const { hasOwnProperty } = Object.prototype;

type Object = {
  [key: string]: any;
}

function assignKey(to: Object, from: Object, key: string) {
  const val = from[key];

  if (!isDef(val) || (hasOwnProperty.call(to, key) && !isDef(to[key]))) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val)) {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

export function deepAssign(to: Object, from: Object) {
  Object.keys(from).forEach(key => {
    assignKey(to, from, key);
  });

  return to;
}
