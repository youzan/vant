/* eslint-disable no-use-before-define */
import { isDef, isObj } from '.';

const { hasOwnProperty } = Object.prototype;

function assignKey(to, from, key) {
  const val = from[key];

  if (!isDef(val) || (hasOwnProperty.call(to, key) && !isDef(to[key]))) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val)) {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

export default function assign(to, from) {
  Object.keys(from).forEach(key => {
    assignKey(to, from, key);
  });

  return to;
}
