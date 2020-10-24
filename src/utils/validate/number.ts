export function isNumeric(val: string | number): val is string {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

export function isNaN(val: number): val is typeof NaN {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }

  // eslint-disable-next-line no-self-compare
  return val !== val;
}
