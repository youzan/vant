import { withInstall } from '../utils';
import _Col from './Col';

const Col = withInstall<typeof _Col>(_Col);

export default Col;
export { Col };
