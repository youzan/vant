import { withInstall } from '../utils';
import _Barrage from './Barrage';

export const Barrage = withInstall(_Barrage);
export default Barrage;

export { barrageProps } from './Barrage';
export type { BarrageProps, BarrageItem } from './Barrage';
export type { BarrageInstance, BarrageThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanBarrage: typeof Barrage;
  }
}
