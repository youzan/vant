import { withInstall } from '../utils';
import _RollingText from './RollingText';

export const RollingText = withInstall(_RollingText);
export default RollingText;
export { rollingTextProps } from './RollingText';
export type { RollingTextProps } from './RollingText';
export type {
  RollingTextDirection,
  RollingTextInstance,
  RollingTextStopOrder,
  RollingTextThemeVars,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanRollingText: typeof _RollingText;
  }
}
