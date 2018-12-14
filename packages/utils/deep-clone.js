import deepAssign from './deep-assign';

export default function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  if (typeof obj === 'object') {
    return deepAssign({}, obj);
  }
  return obj;
}
