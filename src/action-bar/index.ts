import { withInstall } from '../utils';
import _ActionBar from './ActionBar';

const ActionBar = withInstall<typeof _ActionBar>(_ActionBar);

export default ActionBar;
export { ActionBar };
