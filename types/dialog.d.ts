export type DialogOptions = {
  title?: string;
  message?: string;
  overlay?: boolean;
  lockScroll?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  closeOnClickOverlay?: boolean;
}

export interface Dialog {
  (options: DialogOptions): Promise<any>;
  alert(options: DialogOptions): Promise<any>;
  confirm(options: DialogOptions): Promise<any>;
  close(): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: Dialog
  }
}

export const Dialog: Dialog;
