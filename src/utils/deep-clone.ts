import {isDef} from "./base";

export function deepClone<T extends Record<string, any>>(obj: T): T {
  if (!isDef(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return (obj.map((item) => deepClone(item)) as unknown) as T;
  }

  if (typeof obj === 'object') {
    const to = {} as Record<any, any>;
    Object.keys(obj).forEach((key: string) => {
      to[key] = deepClone(obj[key]);
    });

    return to;
  }

  return obj;
}
