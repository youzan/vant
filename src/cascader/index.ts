import { withInstall } from '../utils';
import _Cascader from './Cascader';

const Cascader = withInstall<typeof _Cascader>(_Cascader);

export default Cascader;
export { Cascader };
export type { CascaderOption, CascaderFieldNames } from './Cascader';
