import { withInstall } from '../utils';
import _Overlay from './Overlay';

const Overlay = withInstall<typeof _Overlay>(_Overlay);

export default Overlay;
export { Overlay };
