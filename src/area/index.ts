import { withInstall } from '../utils';
import _Area from './Area';

const Area = withInstall<typeof _Area>(_Area);

export default Area;
export { Area };
export type { AreaList, AreaColumnOption } from './Area';
