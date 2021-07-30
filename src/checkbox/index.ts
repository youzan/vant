import { withInstall } from '../utils';
import _Checkbox from './Checkbox';

const Checkbox = withInstall<typeof _Checkbox>(_Checkbox);

export default Checkbox;
export { Checkbox };
export type { CheckboxInstance } from './types';
