import { withInstall } from '../utils';
import _IndexAnchor from './IndexAnchor';

export const IndexAnchor = withInstall(_IndexAnchor);
export default IndexAnchor;
export { indexAnchorProps } from './IndexAnchor';
export type { IndexAnchorProps } from './IndexAnchor';
export type { IndexAnchorThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanIndexAnchor: typeof IndexAnchor;
  }
}
