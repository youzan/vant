import { deepAssign } from './deep-assign';

export function deepClone(obj: object): object {
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  if (typeof obj === 'object') {
    return deepAssign({}, obj);
  }
  return obj;
}
