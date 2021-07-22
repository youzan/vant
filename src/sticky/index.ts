import { withInstall } from '../utils';
import _Sticky from './Sticky';

const Sticky = withInstall<typeof _Sticky>(_Sticky);

export default Sticky;
export { Sticky };
export type { StickyPosition } from './Sticky';
