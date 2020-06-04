import { isDef } from '..';
import { isNumeric } from '../validate/number';

export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}

function convertRem(value: string) {
  const rootStyle = window.getComputedStyle(document.documentElement);
  const rootFontSize = parseFloat(rootStyle.fontSize);

  value = value.replace(/rem/g, '');

  return +value * rootFontSize;
}

export function unitToPx(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }

  if (value.indexOf('rem') !== -1) {
    return convertRem(value);
  }

  return parseFloat(value);
}
