import { withInstall } from '../utils';
import _Grid from './Grid';

export const Grid = withInstall(_Grid);
export default Grid;
export type { GridProps, GridDirection } from './Grid';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanGrid: typeof Grid;
  }
}
