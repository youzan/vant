import { withInstall } from '../utils';
import _Calendar from './Calendar';

const Calendar = withInstall<typeof _Calendar>(_Calendar);

export default Calendar;
export { Calendar };
export type { CalendarType } from './CalendarMonth';
export type { CalendarDayItem, CalendarDayType } from './CalendarDay';
