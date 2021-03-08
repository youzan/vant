import { withInstall } from '../utils';
import _CountDown from './CountDown';

const CountDown = withInstall<typeof _CountDown>(_CountDown);

export default CountDown;
export { CountDown };
