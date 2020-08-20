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
  itemHeight: [Number, String],
  cancelButtonText: String,
  confirmButtonText: String,
  showToolbar: {
    type: Boolean,
    default: true,
  },
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
