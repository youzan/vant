import { withInstall } from '../utils';
import _SubmitBar from './SubmitBar';

const SubmitBar = withInstall<typeof _SubmitBar>(_SubmitBar);

export default SubmitBar;
export { SubmitBar };
