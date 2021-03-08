import { withInstall } from '../utils';
import _Grid from './Grid';

const Grid = withInstall<typeof _Grid>(_Grid);

export default Grid;
export { Grid };
export type { GridDirection } from './Grid';
