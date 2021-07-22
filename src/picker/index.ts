import { withInstall } from '../utils';
import _Picker from './Picker';

const Picker = withInstall<typeof _Picker>(_Picker);

export default Picker;
export { Picker };
export type {
  PickerColumn,
  PickerOption,
  PickerFieldNames,
  PickerObjectColumn,
  PickerObjectOption,
  PickerToolbarPosition,
} from './Picker';
