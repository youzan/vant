import { withInstall } from '../utils';
import _Divider from './Divider';

const Divider = withInstall<typeof _Divider>(_Divider);

export default Divider;
export { Divider };
export type { DividerContentPosition } from './Divider';
