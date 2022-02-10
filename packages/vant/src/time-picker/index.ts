import { withInstall } from '../utils';
import _TimePicker, { TimePickerProps } from './TimePicker';

export const TimePicker = withInstall(_TimePicker);
export default TimePicker;
export type { TimePickerProps };

declare module 'vue' {
  export interface GlobalComponents {
    VanTimePicker: typeof TimePicker;
  }
}
