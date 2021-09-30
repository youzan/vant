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
  href?: string;
  target: { type: String, default: '_self' };
  to?: [string, object];
  replace?: { type: boolean; default: false };
  append?: boolean;
  decoration?: { type: boolean; default: true };
  download?: { type: boolean; default: false };
  destination?: string;
  vusionCut?: boolean,
  vusionMove?: boolean,
  vusionNodePath?: string,
  vusionNodeTag?: string,
};

export const cellProps = {
  icon: String,
  size: String,
  center: {
    type: Boolean,
    default: true,
  },
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
  href: String,
  target: { type: String, default: '_self' },
  to: [String, Object],
  replace: { type: Boolean, default: false },
  append: { type: Boolean, default: false },
  decoration: { type: Boolean, default: true },
  download: { type: Boolean, default: false },
  destination: String,
  vusionCut: Boolean,
  vusionMove: Boolean,
  vusionNodePath: String,
  vusionNodeTag: String,
};
