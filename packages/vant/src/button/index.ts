import { withInstall } from '../utils';
import _Button from './Button';
import _ButtonGroup from './ButtonGroup';

export const Button = withInstall(_Button);
export const ButtonGroup = withInstall(_ButtonGroup);
export default Button;
export { buttonProps } from './Button';
export { buttonGroupProps, BUTTON_GROUP_KEY } from './ButtonGroup';

export type { ButtonProps } from './Button';
export type { ButtonGroupProps, ButtonGroupProvide } from './ButtonGroup';
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
    VanButtonGroup: typeof ButtonGroup;
  }
}
