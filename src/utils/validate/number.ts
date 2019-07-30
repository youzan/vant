/* eslint-disable no-self-compare */

export function isNumber(value: string): boolean {
  return /^\d+(\.\d+)?$/.test(value);
}

export function isNaN(value: any): boolean {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }

  return value !== value;
}
