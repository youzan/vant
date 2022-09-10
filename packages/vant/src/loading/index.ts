import { withInstall } from '../utils';
import _Loading from './Loading';

export const Loading = withInstall(_Loading);
export default Loading;
export { loadingProps } from './Loading';
export type { LoadingType, LoadingProps } from './Loading';

declare module 'vue' {
  export interface GlobalComponents {
    VanLoading: typeof Loading;
  }
}
