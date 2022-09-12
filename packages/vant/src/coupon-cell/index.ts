import { withInstall } from '../utils';
import _CouponCell from './CouponCell';

export const CouponCell = withInstall(_CouponCell);
export default CouponCell;
export { couponCellProps } from './CouponCell';
export type { CouponCellProps } from './CouponCell';
export type { CouponCellThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCouponCell: typeof CouponCell;
  }
}
