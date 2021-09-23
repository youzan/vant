import { withInstall } from '../utils';
import _CountDown, { CountDownProps } from './CountDown';

export const CountDown = withInstall(_CountDown);
export default CountDown;
export type { CountDownProps };
export type { CountDownInstance, CountDownCurrentTime } from './types';
