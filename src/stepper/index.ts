import { withInstall } from '../utils';
import _Stepper from './Stepper';

const Stepper = withInstall<typeof _Stepper>(_Stepper);

export default Stepper;
export { Stepper };
