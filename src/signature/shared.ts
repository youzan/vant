/**
 * Common Sign Props
 */

export type SharedSignProps = {
  lineWidth?: number;
  value?: string;
  disabled?: boolean;
  lineColor?: string;
};

export const SignProps = {
  value: String,
  disabled: Boolean,
  lineWidth: {
    type: null as any,
    default: 1,
  },
  lineColor: {
    type: null as any,
    default: '#000',
  },
};
