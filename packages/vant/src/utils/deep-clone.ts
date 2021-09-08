import { isDef } from './validate';

export function deepClone<T extends Record<string, any> | null | undefined>(
  obj: T
): T {
  if (!isDef(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)) as unknown as T;
  }

  if (typeof obj === 'object') {
    const to = {} as Record<string, any>;
    Object.keys(obj).forEach((key) => {
      to[key] = deepClone(obj[key]);
    });

    return to as T;
  }

  return obj;
}
