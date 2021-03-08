import { withInstall } from '../utils';
import _CouponCell from './CouponCell';

const CouponCell = withInstall<typeof _CouponCell>(_CouponCell);

export default CouponCell;
export { CouponCell };
