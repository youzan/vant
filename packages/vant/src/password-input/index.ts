import { withInstall } from '../utils';
import _PasswordInput from './PasswordInput';

export const PasswordInput = withInstall(_PasswordInput);
export default PasswordInput;
export { passwordInputProps } from './PasswordInput';
export type { PasswordInputProps } from './PasswordInput';
export type { PasswordInputThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanPasswordInput: typeof PasswordInput;
  }
}
