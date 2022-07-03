import { withInstall } from '../utils';
import _Dialog from './Dialog';

export const Dialog = withInstall(_Dialog);
export default Dialog;
export {
  showDialog,
  hideDialog,
  showConfirmDialog,
  setDialogDefaultOptions,
  resetDialogDefaultOptions,
} from './function-call';

export type { DialogProps } from './Dialog';
export type {
  DialogTheme,
  DialogMessage,
  DialogOptions,
  DialogMessageAlign,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanDialog: typeof Dialog;
  }
}
