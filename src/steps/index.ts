import { withInstall } from '../utils';
import _Steps from './Steps';

const Steps = withInstall<typeof _Steps>(_Steps);

export default Steps;
export { Steps };
