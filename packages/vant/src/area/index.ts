import { withInstall } from '../utils';
import _Area from './Area';

export const Area = withInstall(_Area);
export default Area;
export type { AreaProps } from './Area';
export type { AreaList, AreaInstance, AreaColumnOption } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanArea: typeof Area;
  }
}
