import { withInstall } from '../utils';
import _Area, { AreaProps } from './Area';

export const Area = withInstall(_Area);
export default Area;
export type { AreaProps };
export type { AreaList, AreaInstance, AreaColumnOption } from './types';
