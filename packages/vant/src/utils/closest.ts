export function closest(arr: number[], target: number) {
  return arr.reduce((pre, cur) =>
    Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur,
  );
}
