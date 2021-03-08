import { withInstall } from '../utils';
import _Popover from './Popover';

const Popover = withInstall<typeof _Popover>(_Popover);

export default Popover;
export { Popover };
