import { withInstall } from '../utils';
import _Picker, { PickerProps } from './Picker';

export const Picker = withInstall(_Picker);
export default Picker;
export type { PickerProps };
export type {
  PickerColumn,
  PickerOption,
  PickerInstance,
  PickerFieldNames,
  PickerObjectColumn,
  PickerObjectOption,
  PickerToolbarPosition,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanPicker: typeof Picker;
  }
}
