import { withInstall } from '../utils';
import _CheckboxGroup from './CheckboxGroup';

const CheckboxGroup = withInstall<typeof _CheckboxGroup>(_CheckboxGroup);

export default CheckboxGroup;
export { CheckboxGroup };
export type {
  CheckboxGroupInstance,
  CheckboxGroupToggleAllOptions,
} from './types';
