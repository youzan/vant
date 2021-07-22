import { withInstall } from '../utils';
import _Step from './Step';

const Step = withInstall<typeof _Step>(_Step);

export default Step;
export { Step };
