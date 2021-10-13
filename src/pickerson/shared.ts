export type SharedPickerProps = {
  title?: string;
  loading?: boolean;
  itemHeight?: number;
  showToolbar?: boolean;
  visibleItemCount: number | string;
  cancelButtonText?: string;
  confirmButtonText?: string;
};

export const DEFAULT_ITEM_HEIGHT = 44;

export const pickerProps = {
  title: String,
  loading: Boolean,
  readonly: Boolean,
  itemHeight: [Number, String],
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  allowHtml: {
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
