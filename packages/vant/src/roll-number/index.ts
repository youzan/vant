import { withInstall } from '../utils';
import _RollNumber from './RollNumber';

export const RollNumber = withInstall(_RollNumber);
export default RollNumber;
export type { RollNumberProps } from './RollNumber';

declare module 'vue' {
  export interface GlobalComponents {
    VanRollNumber: typeof RollNumber;
  }
}
