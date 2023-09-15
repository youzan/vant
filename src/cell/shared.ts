export type SharedCellProps = {
  icon?: string;
  size?: string;
  border: boolean;
  center?: boolean;
  isLink?: boolean;
  required?: boolean;
  clickable?: boolean;
  iconPrefix?: string;
  titleStyle?: any;
  titleClass?: any;
  valueClass?: any;
  labelClass?: any;
  title?: string | number;
  value?: string | number;
  label?: string | number;
  arrowDirection?: 'up' | 'down' | 'left' | 'right';
};

export const cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  iconPrefix: String,
  titleStyle: null as any,
  titleClass: null as any,
  valueClass: null as any,
  labelClass: null as any,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true,
  },
  clickable: {
    type: Boolean,
    default: null,
  },
};
