import { withInstall } from '../utils';
import _PullRefresh from './PullRefresh';

export const PullRefresh = withInstall(_PullRefresh);
export default PullRefresh;
export type { PullRefreshProps } from './PullRefresh';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanPullRefresh: typeof PullRefresh;
  }
}
