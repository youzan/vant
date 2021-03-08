import { withInstall } from '../utils';
import _Switch from './Switch';

const Switch = withInstall<typeof _Switch>(_Switch);

export default Switch;
export { Switch };
