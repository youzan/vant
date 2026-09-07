import { extend, padZero, makeArrayProp, clamp } from '../utils';
import { pickerSharedProps } from '../picker/Picker';
import type { PropType } from 'vue';
import type { PickerOption } from '../picker';

type Filter = (
  columnType: string,
  options: PickerOption[],
  values: string[],
) => PickerOption[];
type Formatter = (type: string, option: PickerOption) => PickerOption;
type Sort = (
  columnType: string,
  options: PickerOption[],
  values: string[],
) => PickerOption[];

export const sharedProps = extend({}, pickerSharedProps, {
  modelValue: makeArrayProp<string>(),
  filter: Function as PropType<Filter>,
  formatter: {
    type: Function as PropType<Formatter>,
    default: (type: string, option: PickerOption) => option,
  },
  sort: Function as PropType<Sort>,
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

export const genOptions = <T extends string>(
  min: number,
  max: number,
  type: T,
  formatter: Formatter,
  filter: Filter | undefined,
  sort: Sort | undefined,
  values: string[],
) => {
  let options = times(max - min + 1, (index) => {
    const value = padZero(min + index);
    return formatter(type, {
      text: value,
      value,
    });
  });
  if (filter) {
    options = filter(type, options, values);
  }
  if (sort) {
    options = sort(type, options, values);
  }
  return options;
};

export const formatValueRange = (values: string[], columns: PickerOption[][]) =>
  values.map((value, index) => {
    const column = columns[index];
    if (column.length) {
      // Find the actual min and max values in the column
      let minValue = +column[0].value!;
      let maxValue = +column[0].value!;

      for (const option of column) {
        const optionValue = +option.value!;
        if (optionValue < minValue) {
          minValue = optionValue;
        }
        if (optionValue > maxValue) {
          maxValue = optionValue;
        }
      }

      return padZero(clamp(+value, minValue, maxValue));
    }
    return value;
  });
