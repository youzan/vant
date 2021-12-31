import { withInstall } from '../utils';
import _Col from './Col';

export const Col = withInstall(_Col);
export default Col;
export type { ColProps } from './Col';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanCol: typeof Col;
  }
}
