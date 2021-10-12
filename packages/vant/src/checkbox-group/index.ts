import { withInstall } from '../utils';
import _CheckboxGroup, { CheckboxGroupProps } from './CheckboxGroup';

export const CheckboxGroup = withInstall(_CheckboxGroup);
export default CheckboxGroup;
export type { CheckboxGroupProps };
export type {
  CheckboxGroupInstance,
  CheckboxGroupDirection,
  CheckboxGroupToggleAllOptions,
} from './types';
