import { withInstall } from '../utils';
import _Checkbox, { CheckboxProps } from './Checkbox';

export const Checkbox = withInstall(_Checkbox);
export default Checkbox;
export type { CheckboxProps };
export type {
  CheckboxShape,
  CheckboxInstance,
  CheckboxLabelPosition,
} from './types';
