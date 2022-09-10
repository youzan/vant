import { withInstall } from '../utils';
import _TimePicker, { TimePickerProps } from './TimePicker';

export const TimePicker = withInstall(_TimePicker);
export default TimePicker;
export { timePickerProps } from './TimePicker';
export type { TimePickerProps };
export type { TimePickerColumnType } from './TimePicker';

declare module 'vue' {
  export interface GlobalComponents {
    VanTimePicker: typeof TimePicker;
  }
}
