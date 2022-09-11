import { withInstall } from '../utils';
import _Dialog from './Dialog';

export const Dialog = withInstall(_Dialog);
export default Dialog;
export { dialogProps } from './Dialog';
export {
  showDialog,
  closeDialog,
  showConfirmDialog,
  setDialogDefaultOptions,
  resetDialogDefaultOptions,
} from './function-call';

export type { DialogProps } from './Dialog';
export type {
  DialogTheme,
  DialogMessage,
  DialogOptions,
  DialogThemeVars,
  DialogMessageAlign,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanDialog: typeof Dialog;
  }
}
