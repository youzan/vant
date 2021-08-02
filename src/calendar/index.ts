import { withInstall } from '../utils';
import _Calendar from './Calendar';

const Calendar = withInstall<typeof _Calendar>(_Calendar);

export default Calendar;
export { Calendar };
export type {
  CalendarType,
  CalendarDayItem,
  CalendarDayType,
  CalendarInstance,
} from './types';
