export type SharedCellProps = {
  icon?: string;
  size?: string;
  border: boolean;
  center?: boolean;
  isLink?: boolean;
  required?: boolean;
  titleClass?: any;
  valueClass?: any;
  labelClass?: any;
  title?: string | number;
  value?: string | number;
  label?: string | number;
}

export const cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  titleClass: null as any,
  valueClass: null as any,
  labelClass: null as any,
  title: [String, Number],
  value: [String, Number],
  label: [String, Number],
  border: {
    type: Boolean,
    default: true
  }
};
