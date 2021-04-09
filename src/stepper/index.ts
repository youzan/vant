import { withInstall } from '../utils';
import _Stepper, { StepperTheme } from './Stepper';

const Stepper = withInstall<typeof _Stepper>(_Stepper);

export default Stepper;
export { Stepper };
export type { StepperTheme };
