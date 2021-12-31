import { withInstall } from '../utils';
import _Stepper from './Stepper';

export const Stepper = withInstall(_Stepper);
export default Stepper;
export type { StepperTheme, StepperProps } from './Stepper';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanStepper: typeof Stepper;
  }
}
