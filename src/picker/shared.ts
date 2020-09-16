export type SharedPickerProps = {
  title?: string;
  loading?: boolean;
  itemHeight?: number;
  showToolbar?: boolean;
  visibleItemCount: number | string;
  cancelButtonText?: string;
  confirmButtonText?: string;
};

export const PICKER_KEY = 'vanPicker';

export const DEFAULT_ITEM_HEIGHT = 44;

export const pickerProps = {
  title: String,
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  itemHeight: [Number, String],
  cancelButtonText: String,
  confirmButtonText: String,
  showToolbar: {
    type: Boolean,
    default: true,
  },
  visibleItemCount: {
    type: [Number, String],
    default: 6,
  },
  swipeDuration: {
    type: [Number, String],
    default: 1000,
  },
};
