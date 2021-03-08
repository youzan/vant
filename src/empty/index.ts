import { withInstall } from '../utils';
import _Empty from './Empty';

const Empty = withInstall<typeof _Empty>(_Empty);

export default Empty;
export { Empty };
