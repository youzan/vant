/* eslint-disable no-use-before-define */
import type { ComponentPublicInstance } from 'vue';
import type { PickerProps } from './Picker';

export type PickerToolbarPosition = 'top' | 'bottom';

export type PickerFieldNames = {
  text?: string;
  value?: string;
  children?: string;
};

export type PickerOption = {
  text?: string | number;
  value?: string | number;
  disabled?: boolean;
  children?: PickerColumn;
  className?: unknown;
  // for custom filed names
  [key: PropertyKey]: any;
};

export type PickerColumn = PickerOption[];

export type PickerExpose = {
  confirm: () => void;
  getSelectedOptions: () => PickerOption[];
};

export type PickerColumnProvide = {
  state: {
    index: number;
    offset: number;
    duration: number;
    options: PickerOption[];
  };
  setIndex: (index: number, emitChange?: boolean | undefined) => void;
  getValue: () => PickerOption;
  setValue: (value: string) => void;
  setOptions: (options: PickerOption[]) => void;
  stopMomentum: () => void;
};

export type PickerInstance = ComponentPublicInstance<PickerProps, PickerExpose>;

export type PickerConfirmEventParams = {
  selectedValues: Array<number | string>;
  selectedOptions: PickerOption[];
};

export type PickerCancelEventParams = PickerConfirmEventParams;

export type PickerChangeEventParams = PickerConfirmEventParams & {
  columnIndex: number;
};
