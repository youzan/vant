export function isNumber(value: string): boolean {
  return /^\d+(\.\d+)?$/.test(value);
}

export function isNaN(value: any): boolean {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }

  // eslint-disable-next-line no-self-compare
  return value !== value;
}
