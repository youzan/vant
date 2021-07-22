import { withInstall } from '../utils';
import _TreeSelect from './TreeSelect';

const TreeSelect = withInstall<typeof _TreeSelect>(_TreeSelect);

export default TreeSelect;
export { TreeSelect };
export type { TreeSelectItem, TreeSelectChild } from './TreeSelect';
