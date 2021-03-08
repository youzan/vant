import { withInstall } from '../utils';
import _Calendar from './Calendar';

const Calendar = withInstall<typeof _Calendar>(_Calendar);

export default Calendar;
export { Calendar };
