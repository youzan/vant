import { withInstall } from '../utils';
import _Coupon from './Coupon';

const Coupon = withInstall<typeof _Coupon>(_Coupon);

export default Coupon;
export { Coupon };
export type { CouponInfo } from './Coupon';
