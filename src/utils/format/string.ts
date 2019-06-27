const camelizeRE = /-(\w)/g;

export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

export function padZero(num: number | string): string {
  return (num < 10 ? '0' : '') + num;
}
