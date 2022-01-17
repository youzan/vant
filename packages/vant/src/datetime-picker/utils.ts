import { extend } from '../utils';
import { pickerSharedProps } from '../picker/Picker';
import type { PropType } from 'vue';
import type { PickerInstance } from '../picker';
import type { DatetimePickerColumnType } from './types';

export const sharedProps = extend({}, pickerSharedProps, {
  filter: Function as PropType<(type: string, values: string[]) => string[]>,
  columnsOrder: Array as PropType<DatetimePickerColumnType[]>,
  formatter: {
    type: Function as PropType<(type: string, value: string) => string>,
    default: (type: string, value: string) => value,
  },
});

export const pickerInheritKeys = Object.keys(pickerSharedProps) as Array<
  keyof typeof pickerSharedProps
>;

export function times<T>(n: number, iteratee: (index: number) => T) {
  if (n < 0) {
    return [];
  }

  const result: T[] = Array(n);

  let index = -1;
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

// https://github.com/youzan/vant/issues/10013
export const proxyPickerMethods = (
  picker: PickerInstance,
  callback: () => void
) => {
  const methods = [
    'setValues',
    'setIndexes',
    'setColumnIndex',
    'setColumnValue',
  ];
  return new Proxy(picker, {
    get: (target, prop: keyof PickerInstance) => {
      if (methods.includes(prop)) {
        return (...args: unknown[]) => {
          target[prop](...args);
          callback();
        };
      }
      return target[prop];
    },
  });
};
