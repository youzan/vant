import { withInstall } from '../utils';
import _Tab from './Tab';

export const Tab = withInstall(_Tab);
export default Tab;
export { tabProps } from './Tab';
export { useTabStatus, useAllTabStatus } from '../composables/use-tab-status';
export type { TabProps } from './Tab';

declare module 'vue' {
  export interface GlobalComponents {
    VanTab: typeof Tab;
  }
}
