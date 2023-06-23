import { withInstall } from '../utils';
import _Watermark from './Watermark';

export const Watermark = withInstall(_Watermark);
export default Watermark;
export { watermarkProps } from './Watermark';
export type { WatermarkProps } from './Watermark';
export type { WatermarkThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanWatermark: typeof Watermark;
  }
}
