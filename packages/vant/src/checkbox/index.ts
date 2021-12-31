import { withInstall } from '../utils';
import _Checkbox from './Checkbox';

export const Checkbox = withInstall(_Checkbox);
export default Checkbox;
export type { CheckboxProps } from './Checkbox';
export type {
  CheckboxShape,
  CheckboxInstance,
  CheckboxLabelPosition,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCheckbox: typeof Checkbox;
  }
}
