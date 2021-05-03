import { withInstall } from '../utils';
import _NumberKeyboard from './NumberKeyboard';

const NumberKeyboard = withInstall<typeof _NumberKeyboard>(_NumberKeyboard);

export default NumberKeyboard;
export { NumberKeyboard };
export type { NumberKeyboardTheme } from './NumberKeyboard';
