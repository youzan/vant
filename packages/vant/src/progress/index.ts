import { withInstall } from '../utils';
import _Progress from './Progress';

export const Progress = withInstall(_Progress);
export default Progress;
export type { ProgressInstance } from './types';
