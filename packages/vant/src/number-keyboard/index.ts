import { withInstall } from '../utils';
import _NumberKeyboard from './NumberKeyboard';

export const NumberKeyboard = withInstall(_NumberKeyboard);
export default NumberKeyboard;
export { numberKeyboardProps } from './NumberKeyboard';
export type {
  NumberKeyboardProps,
  NumberKeyboardTheme,
} from './NumberKeyboard';
export type { NumberKeyboardThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanNumberKeyboard: typeof NumberKeyboard;
  }
}
