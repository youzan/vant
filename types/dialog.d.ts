export type DialogOptions = {
  title?: string;
  message?: string;
  overlay?: boolean;
  lockOnScroll?: boolean;
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

export const Dialog: Dialog;
