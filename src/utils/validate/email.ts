/* eslint-disable */
export function isEmail(value: string): boolean {
  const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return reg.test(value.trim());
}
