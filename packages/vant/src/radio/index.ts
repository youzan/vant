import { withInstall } from '../utils';
import _Radio from './Radio';

export const Radio = withInstall(_Radio);
export default Radio;
export type { RadioProps, RadioShape, RadioLabelPosition } from './Radio';

declare module 'vue' {
  export interface GlobalComponents {
    VanRadio: typeof Radio;
  }
}
