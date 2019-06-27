import { isDef } from '..';
import { isNumber } from '../validate/number';

export function suffixPx(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumber(value) ? `${value}px` : value;
}
