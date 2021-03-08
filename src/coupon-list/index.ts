import { withInstall } from '../utils';
import _CouponList from './CouponList';

const CouponList = withInstall<typeof _CouponList>(_CouponList);

export default CouponList;
export { CouponList };
