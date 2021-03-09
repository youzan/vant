import { withInstall } from '../utils';
import _Tabbar from './Tabbar';

const Tabbar = withInstall<typeof _Tabbar>(_Tabbar);

export default Tabbar;
export { Tabbar };
