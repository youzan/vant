import { withInstall } from '../utils';
import _PickerGroup, {
  PickerGroupProps,
  PickerGroupInstance,
} from './PickerGroup';

export const PickerGroup = withInstall(_PickerGroup);
export default PickerGroup;
export { pickerGroupProps } from './PickerGroup';
export type { PickerGroupProps, PickerGroupInstance };
export type { PickerGroupThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanPickerGroup: typeof PickerGroup;
  }
}
