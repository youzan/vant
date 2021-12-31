import { withInstall } from '../utils';
import _Empty from './Empty';

export const Empty = withInstall(_Empty);
export default Empty;
export type { EmptyProps } from './Empty';

declare module 'vue' {
  export interface GlobalComponents {
    VanEmpty: typeof Empty;
  }
}
