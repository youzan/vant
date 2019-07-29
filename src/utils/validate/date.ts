import { isNaN } from './number';

export function isDate(date: Date): boolean {
  return (
    Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())
  );
}
