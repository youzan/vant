import { withInstall } from '../utils';
import _PullRefresh from './PullRefresh';

export const PullRefresh = withInstall(_PullRefresh);
export default PullRefresh;
export { pullRefreshProps } from './PullRefresh';
export type { PullRefreshProps } from './PullRefresh';
export type { PullRefreshThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanPullRefresh: typeof PullRefresh;
  }
}
