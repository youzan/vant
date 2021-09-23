import { withInstall } from '../utils';
import _DatetimePicker, { DatetimePickerProps } from './DatetimePicker';

export const DatetimePicker = withInstall(_DatetimePicker);
export default DatetimePicker;
export type { DatetimePickerProps };
export type { DatetimePickerType, DatetimePickerInstance } from './types';
