import { withInstall } from '../utils';
import _Badge from './Badge';

const Badge = withInstall<typeof _Badge>(_Badge);

export default Badge;
export { Badge };
