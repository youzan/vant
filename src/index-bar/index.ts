import { withInstall } from '../utils';
import _IndexBar from './IndexBar';

const IndexBar = withInstall<typeof _IndexBar>(_IndexBar);

export default IndexBar;
export { IndexBar };
export type { IndexBarInstance } from './types';
