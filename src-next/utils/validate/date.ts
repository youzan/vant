import { isNaN } from './number';

export function isDate(val: Date): val is Date {
  return (
    Object.prototype.toString.call(val) === '[object Date]' &&
    !isNaN(val.getTime())
  );
}
