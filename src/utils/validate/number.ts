export function isNumber(value: string): boolean {
  return /^\d+(\.\d+)?$/.test(value);
}
