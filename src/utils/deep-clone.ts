import { isDef } from './index';
import { ObjectIndex } from './types';

export function deepClone(obj: ObjectIndex): object {
  if (!isDef(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  if (typeof obj === 'object') {
    const to = {} as ObjectIndex;
    Object.keys(obj).forEach((key) => {
      to[key] = deepClone(obj[key]);
    });

    return to;
  }

  return obj;
}
