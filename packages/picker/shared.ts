export type SharedPickerProps = {
  title?: string;
  loading?: boolean;
  itemHeight: number;
  showToolbar?: boolean;
  visibleItemCount: number;
  cancelButtonText?: string;
  confirmButtonText?: string;
}

export const pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  visibleItemCount: {
    type: Number,
    default: 5
  },
  itemHeight: {
    type: Number,
    default: 44
  }
};
