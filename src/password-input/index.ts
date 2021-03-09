import { withInstall } from '../utils';
import _PasswordInput from './PasswordInput';

const PasswordInput = withInstall<typeof _PasswordInput>(_PasswordInput);

export default PasswordInput;
export { PasswordInput };
