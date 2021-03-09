import { withInstall } from '../utils';
import _PullRefresh from './PullRefresh';

const PullRefresh = withInstall<typeof _PullRefresh>(_PullRefresh);

export default PullRefresh;
export { PullRefresh };
