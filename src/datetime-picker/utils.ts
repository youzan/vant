import { isNaN } from '../utils/validate/number';

export function times(n: number, iteratee: (index: number) => any[]) {
  if (n < 0) {
    return [];
  }

  let index = -1;
  const result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

export function getTrueValue(value: string | undefined): number {
  if (!value) {
    return 0;
  }

  while (isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(value, 10);
}

export function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate();
}
