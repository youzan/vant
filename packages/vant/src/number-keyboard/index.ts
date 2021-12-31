import { withInstall } from '../utils';
import _NumberKeyboard from './NumberKeyboard';

export const NumberKeyboard = withInstall(_NumberKeyboard);
export default NumberKeyboard;
export type {
  NumberKeyboardProps,
  NumberKeyboardTheme,
} from './NumberKeyboard';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanNumberKeyboard: typeof NumberKeyboard;
  }
}
