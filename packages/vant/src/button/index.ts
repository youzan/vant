import { withInstall } from '../utils';
import _Button from './Button';

export const Button = withInstall(_Button);
export default Button;
export type {
  ButtonType,
  ButtonSize,
  ButtonNativeType,
  ButtonIconPosition,
} from './Button';
