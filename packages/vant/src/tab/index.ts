import { withInstall } from '../utils';
import _Tab from './Tab';

export const Tab = withInstall(_Tab);
export default Tab;
export type { TabProps } from './Tab';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanTab: typeof Tab;
  }
}
