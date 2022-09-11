import { withInstall } from '../utils';
import _CouponList from './CouponList';

export const CouponList = withInstall(_CouponList);
export default CouponList;
export { couponListProps } from './CouponList';
export type { CouponListProps } from './CouponList';
export type { CouponListThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCouponList: typeof CouponList;
  }
}
