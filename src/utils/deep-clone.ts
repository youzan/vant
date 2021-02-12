import { deepAssign } from './deep-assign';

export function deepClone<T extends Record<string, any>>(obj: T): T {
  if (Array.isArray(obj)) {
    return (obj.map((item) => deepClone(item)) as unknown) as T;
  }

  if (typeof obj === 'object') {
    return deepAssign({}, obj) as T;
  }

  return obj;
}
