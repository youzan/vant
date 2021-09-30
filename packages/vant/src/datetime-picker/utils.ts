import { PropType } from 'vue';
import { extend } from '../utils';
import { pickerProps } from '../picker/Picker';
import type { DatetimePickerColumnType } from './types';

export const sharedProps = extend({}, pickerProps, {
  filter: Function as PropType<(type: string, values: string[]) => string[]>,
  columnsOrder: Array as PropType<DatetimePickerColumnType[]>,
  formatter: {
    type: Function as PropType<(type: string, value: string) => string>,
    default: (type: string, value: string) => value,
  },
});

export const pickerKeys = Object.keys(pickerProps) as Array<
  keyof typeof pickerProps
>;

export function times<T>(n: number, iteratee: (index: number) => T) {
  let index = -1;
  const result: T[] = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

export function getTrueValue(value: string | undefined): number {
  if (!value) {
    return 0;
  }

  while (Number.isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(value, 10);
}

export const getMonthEndDay = (year: number, month: number): number =>
  32 - new Date(year, month - 1, 32).getDate();
