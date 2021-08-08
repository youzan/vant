import { withInstall } from '../utils';
import _DatetimePicker from './DatetimePicker';

const DatetimePicker = withInstall<typeof _DatetimePicker>(_DatetimePicker);

export default DatetimePicker;
export { DatetimePicker };
export type { DatetimePickerType, DatetimePickerInstance } from './types';
