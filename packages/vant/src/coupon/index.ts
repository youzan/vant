import { withInstall } from '../utils';
import _Coupon from './Coupon';

export const Coupon = withInstall(_Coupon);
export default Coupon;
export type { CouponInfo } from './Coupon';
export type { CouponThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCoupon: typeof Coupon;
  }
}
