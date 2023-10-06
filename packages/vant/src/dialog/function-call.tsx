import { extend, inBrowser, ComponentInstance } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import Dialog from './Dialog';
import type { DialogAction, DialogOptions } from './types';

let instance: ComponentInstance;

const DEFAULT_OPTIONS = {
  title: '',
  width: '',
  theme: null,
  message: '',
  overlay: true,
  callback: null,
  teleport: 'body',
  className: '',
  allowHtml: false,
  lockScroll: true,
  transition: undefined,
  beforeClose: null,
  overlayClass: '',
  overlayStyle: undefined,
  messageAlign: '',
  cancelButtonText: '',
  cancelButtonColor: null,
  cancelButtonDisabled: false,
  confirmButtonText: '',
  confirmButtonColor: null,
  confirmButtonDisabled: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: true,
  closeOnClickOverlay: false,
} as const;

let currentOptions = extend({}, DEFAULT_OPTIONS);

function initInstance() {
  const Wrapper = {
    setup() {
      const { state, toggle } = usePopupState();
      return () => <Dialog {...state} onUpdate:show={toggle} />;
    },
  };

  ({ instance } = mountComponent(Wrapper));
}

/**
 * Display a message prompt dialog with a default confirm button
 */
export function showDialog(
  options: DialogOptions,
): Promise<DialogAction | undefined> {
  /* istanbul ignore if */
  if (!inBrowser) {
    return Promise.resolve(undefined);
  }

  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    instance.open(
      extend({}, currentOptions, options, {
        callback: (action?: DialogAction) => {
          (action === 'confirm' ? resolve : reject)(action);
        },
      }),
    );
  });
}

/**
 * Modify the default configuration that affects all `showDialog` calls
 */
export const setDialogDefaultOptions = (options: DialogOptions) => {
  extend(currentOptions, options);
};

/**
 * Reset the default configuration that affects all `showDialog` calls
 */
export const resetDialogDefaultOptions = () => {
  currentOptions = extend({}, DEFAULT_OPTIONS);
};

/**
 * Display a message confirmation dialog with default confirm and cancel buttons
 */
export const showConfirmDialog = (options: DialogOptions) =>
  showDialog(extend({ showCancelButton: true }, options));

/**
 * Close the currently displayed dialog
 */
export const closeDialog = () => {
  if (instance) {
    instance.toggle(false);
  }
};
