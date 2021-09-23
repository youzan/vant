import { withInstall } from '../utils';
import _Calendar, { CalendarProps } from './Calendar';

export const Calendar = withInstall(_Calendar);
export default Calendar;
export type { CalendarProps };
export type {
  CalendarType,
  CalendarDayItem,
  CalendarDayType,
  CalendarInstance,
} from './types';
