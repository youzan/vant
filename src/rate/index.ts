import { withInstall } from '../utils';
import _Rate from './Rate';

const Rate = withInstall<typeof _Rate>(_Rate);

export default Rate;
export { Rate };
