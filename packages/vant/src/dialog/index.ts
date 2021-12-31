import { Dialog } from './function-call';

export default Dialog;
export { Dialog };
export type { DialogProps } from './Dialog';
export type {
  DialogTheme,
  DialogMessage,
  DialogOptions,
  DialogMessageAlign,
} from './types';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanDialog: typeof Dialog.Component;
  }
}
