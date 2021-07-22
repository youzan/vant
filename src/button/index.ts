import { withInstall } from '../utils';
import _Button from './Button';

const Button = withInstall<typeof _Button>(_Button);

export default Button;
export { Button };
export type { ButtonType, ButtonSize } from './Button';
