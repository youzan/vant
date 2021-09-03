import { ComponentPublicInstance } from 'vue';
import type { PickerInstance } from '../picker';
import { DatetimePickerProps } from './DatetimePicker';

export type DatetimePickerColumnType =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute';

export type DatetimePickerType =
  | 'date'
  | 'time'
  | 'datetime'
  | 'datehour'
  | 'month-day'
  | 'year-month';

export type DatetimePickerExpose = {
  getPicker: () => PickerInstance;
};

export type DatetimePickerInstance = ComponentPublicInstance<
  DatetimePickerProps,
  DatetimePickerExpose
>;
