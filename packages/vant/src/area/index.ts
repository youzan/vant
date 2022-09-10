import { withInstall } from '../utils';
import _Area from './Area';

export const Area = withInstall(_Area);
export default Area;
export { areaProps } from './Area';
export type { AreaProps } from './Area';
export type { AreaList, AreaInstance } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanArea: typeof Area;
  }
}
