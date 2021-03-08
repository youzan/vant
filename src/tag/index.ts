import { withInstall } from '../utils';
import _Tag from './Tag';

const Tag = withInstall<typeof _Tag>(_Tag);

export default Tag;
export { Tag };
