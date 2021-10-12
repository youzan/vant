import { withInstall } from '../utils';
import _Steps, { StepsDirection } from './Steps';

export const Steps = withInstall(_Steps);
export default Steps;
export type { StepsDirection };
