import { withInstall } from '../utils';
import _Button from './Button';

export const Button = withInstall(_Button);
export default Button;
export { buttonProps } from './Button';
export type { ButtonProps } from './Button';
export type {
  ButtonType,
  ButtonSize,
  ButtonThemeVars,
  ButtonNativeType,
  ButtonIconPosition,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanButton: typeof Button;
  }
}
