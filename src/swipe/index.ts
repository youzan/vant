import { withInstall } from '../utils';
import _Swipe from './Swipe';

const Swipe = withInstall<typeof _Swipe>(_Swipe);

export default Swipe;
export { Swipe };
export type { SwipeInstance, SwipeToOptions } from './types';
