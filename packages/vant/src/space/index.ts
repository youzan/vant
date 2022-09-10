import { withInstall } from '../utils';
import _Space from './Space';

export const Space = withInstall(_Space);
export default Space;
export { spaceProps } from './Space';
export type { SpaceProps, SpaceSize, SpaceAlign } from './Space';

declare module 'vue' {
  export interface GlobalComponents {
    VanSpace: typeof Space;
  }
}
