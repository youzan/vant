import { withInstall } from '../utils';
import _Icon from './Icon';

export const Icon = withInstall(_Icon);
export default Icon;
export { iconProps } from './Icon';
export type { IconProps } from './Icon';

declare module 'vue' {
  export interface GlobalComponents {
    VanIcon: typeof Icon;
  }
}
