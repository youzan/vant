import { installable } from '../utils';
import _Coupon from './Coupon';

const Coupon = installable(_Coupon);

export default Coupon;
export { Coupon };
export type { CouponInfo } from './Coupon';
