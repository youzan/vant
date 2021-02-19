import { isNaN } from './number';

export function isDate(val: unknown): val is Date {
  return (
    Object.prototype.toString.call(val) === '[object Date]' &&
    !isNaN((val as Date).getTime())
  );
}
