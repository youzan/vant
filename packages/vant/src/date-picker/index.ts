import { withInstall } from '../utils';
import _DatePicker, { DatePickerProps } from './DatePicker';

export const DatePicker = withInstall(_DatePicker);
export default DatePicker;
export type { DatePickerProps };
export type { DatePickerColumnType } from './DatePicker';

declare module 'vue' {
  export interface GlobalComponents {
    VanDatePicker: typeof DatePicker;
  }
}
