import { withInstall } from '../utils';
import _Radio from './Radio';

export const Radio = withInstall(_Radio);
export default Radio;
export type { RadioProps, RadioShape, RadioLabelPosition } from './Radio';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanRadio: typeof Radio;
  }
}
