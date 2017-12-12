import { isDef } from './';

const { hasOwnProperty } = Object.prototype;

function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

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
  for (const key in from) {
    if (hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }
  return to;
}
