import { isDef, clamp, extend, createNamespace, type Numeric } from '../utils';
import type { Ref } from 'vue';
import type { PickerOption, PickerColumn, PickerFieldNames } from './types';

const [name, bem, t] = createNamespace('picker');

export { name, bem, t };

export const getFirstEnabledOption = (
  options: PickerOption[],
): PickerOption | undefined =>
  options.find((option) => !option.disabled) || options[0];

export function getColumnsType(
  columns: PickerColumn | PickerColumn[],
  fields: Required<PickerFieldNames>,
) {
  const firstColumn = columns[0];
  if (firstColumn) {
    if (Array.isArray(firstColumn)) {
      return 'multiple';
    }
    if (fields.children in firstColumn) {
      return 'cascade';
    }
  }
  return 'default';
}

export function findIndexOfEnabledOption(
  options: PickerOption[],
  index: number,
) {
  index = clamp(index, 0, options.length);

  for (let i = index; i < options.length; i++) {
    if (!options[i].disabled) return i;
  }
  for (let i = index - 1; i >= 0; i--) {
    if (!options[i].disabled) return i;
  }

  return 0;
}

export const isOptionExist = (
  options: PickerOption[],
  value: Numeric | undefined,
  fields: Required<PickerFieldNames>,
) =>
  value !== undefined &&
  !!options.find((option) => option[fields.value] === value);

export function findOptionByValue(
  options: PickerOption[],
  value: Numeric,
  fields: Required<PickerFieldNames>,
): PickerOption | undefined {
  const index = options.findIndex((option) => option[fields.value] === value);
  const enabledIndex = findIndexOfEnabledOption(options, index);
  return options[enabledIndex];
}

export function formatCascadeColumns(
  columns: PickerColumn | PickerColumn[],
  fields: Required<PickerFieldNames>,
  selectedValues: Ref<Numeric[]>,
) {
  const formatted: PickerColumn[] = [];

  let cursor: PickerOption | undefined = {
    [fields.children]: columns,
  };
  let columnIndex = 0;

  while (cursor && cursor[fields.children]) {
    const options: PickerOption[] = cursor[fields.children];
    const value = selectedValues.value[columnIndex];

    cursor = isDef(value)
      ? findOptionByValue(options, value, fields)
      : undefined;

    if (!cursor && options.length) {
      const firstValue = getFirstEnabledOption(options)![fields.value];
      cursor = findOptionByValue(options, firstValue, fields);
    }

    columnIndex++;
    formatted.push(options);
  }

  return formatted;
}

export function getElementTranslateY(element: Element) {
  const { transform } = window.getComputedStyle(element);
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

export function assignDefaultFields(
  fields: PickerFieldNames | undefined,
): Required<PickerFieldNames> {
  return extend(
    {
      text: 'text',
      value: 'value',
      children: 'children',
    },
    fields,
  );
}
