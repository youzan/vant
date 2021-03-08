import { withInstall } from '../utils';
import _IndexAnchor from './IndexAnchor';

const IndexAnchor = withInstall<typeof _IndexAnchor>(_IndexAnchor);

export default IndexAnchor;
export { IndexAnchor };
