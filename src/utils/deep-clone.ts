import { deepAssign } from './deep-assign';

export function deepClone(obj: Record<string, any>): Record<string, any> {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  if (typeof obj === 'object') {
    return deepAssign({}, obj);
  }

  return obj;
}
