import { extend, makeArrayProp } from '../utils';
import { pickerSharedProps } from '../picker/Picker';
import type { PropType } from 'vue';
import type { PickerOption } from '../picker';

export const sharedProps = extend({}, pickerSharedProps, {
  modelValue: makeArrayProp<string>(),
  filter: Function as PropType<
    (columnType: string, options: PickerOption[]) => PickerOption[]
  >,
  formatter: {
    type: Function as PropType<
      (type: string, option: PickerOption) => PickerOption
    >,
    default: (type: string, option: PickerOption) => option,
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

export const getMonthEndDay = (year: number, month: number): number =>
  32 - new Date(year, month - 1, 32).getDate();
