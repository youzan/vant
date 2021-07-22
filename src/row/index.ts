import { withInstall } from '../utils';
import _Row from './Row';

const Row = withInstall<typeof _Row>(_Row);

export default Row;
export { Row };
export type { RowAlign, RowJustify } from './Row';
