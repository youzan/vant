import { withInstall } from '../utils';
import _Picker from './Picker';

export const Picker = withInstall(_Picker);
export default Picker;
export type {
  PickerColumn,
  PickerOption,
  PickerInstance,
  PickerFieldNames,
  PickerObjectColumn,
  PickerObjectOption,
  PickerToolbarPosition,
} from './types';
