import { withInstall } from '../utils';
import _Switch from './Switch';

export const Switch = withInstall(_Switch);
export default Switch;
export type { SwitchProps } from './Switch';

declare module 'vue' {
  export interface GlobalComponents {
    VanSwitch: typeof Switch;
  }
}
