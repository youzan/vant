/* eslint-disable no-use-before-define */
import { isDef, isObj } from '.';
import { ObjectIndex } from './types';

const { hasOwnProperty } = Object.prototype;

function assignKey(to: ObjectIndex, from: ObjectIndex, key: string) {
  const val = from[key];

  if (!isDef(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val) || typeof val === 'function') {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

export function deepAssign(to: ObjectIndex, from: ObjectIndex): ObjectIndex {
  Object.keys(from).forEach(key => {
    assignKey(to, from, key);
  });

  return to;
}
