/**
 * Common Switch Props
 */

export type SharedSwitchProps = {
  size?: string | number;
  loading?: boolean;
  disabled?: boolean;
  modelValue?: any;
  activeValue: any;
  inactiveValue: any;
  activeColor?: string;
  inactiveColor?: string;
};

export const switchProps = {
  size: [Number, String],
  loading: Boolean,
  disabled: Boolean,
  modelValue: null as any,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null as any,
    default: true,
  },
  inactiveValue: {
    type: null as any,
    default: false,
  },
};
