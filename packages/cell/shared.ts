export type SharedCellProps = {
  icon?: string;
  border?: boolean;
  center?: boolean;
  isLink?: boolean;
  required?: boolean;
  titleClass?: string;
  valueClass?: string;
  labelClass?: string;
  title?: string | number;
  value?: string | number;
  label?: string | number;
}

export const cellProps = {
  icon: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  titleClass: String,
  valueClass: String,
  labelClass: String,
  title: [String, Number],
  value: [String, Number],
  label: [String, Number],
  border: {
    type: Boolean,
    default: true
  }
};
