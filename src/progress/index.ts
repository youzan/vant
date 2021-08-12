import { withInstall } from '../utils';
import _Progress from './Progress';

const Progress = withInstall<typeof _Progress>(_Progress);

export default Progress;
export { Progress };
export type { ProgressInstance } from './types';
