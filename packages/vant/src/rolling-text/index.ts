import { withInstall } from '../utils';
import _RollingText from './RollingText';

export const RollingText = withInstall(_RollingText);
export default RollingText;
export type { RollingTextProps } from './RollingText';

declare module 'vue' {
  export interface GlobalComponents {
    Van_RollingText: typeof _RollingText;
  }
}
