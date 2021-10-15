import { withInstall } from '../utils';
import _Cascader, { CascaderProps } from './Cascader';

export const Cascader = withInstall(_Cascader);
export default Cascader;
export type { CascaderProps };
export type { CascaderOption, CascaderFieldNames } from './types';
