export type SharedPickerProps = {
  title?: string;
  loading?: boolean;
  itemHeight: number;
  showToolbar?: boolean;
  visibleItemCount: number | string;
  cancelButtonText?: string;
  confirmButtonText?: string;
};

export const pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  allowHtml: {
    type: Boolean,
    default: true,
  },
  visibleItemCount: {
    type: [Number, String],
    default: 5,
  },
  itemHeight: {
    type: [Number, String],
    default: 44,
  },
  swipeDuration: {
    type: [Number, String],
    default: 1000,
  },
};
