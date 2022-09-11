import { withInstall } from '../utils';
import _Rate from './Rate';

export const Rate = withInstall(_Rate);
export default Rate;
export { rateProps } from './Rate';
export type { RateProps } from './Rate';
export type { RateThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanRate: typeof Rate;
  }
}
