import type { ComponentPublicInstance } from 'vue';
import type { PickerGroupProps } from './PickerGroup';
import { Numeric } from '../utils';

export type PickerGroupExpose = {
  setTabActive: (index: Numeric) => void;
};

export type PickerGroupInstance = ComponentPublicInstance<
  PickerGroupProps,
  PickerGroupExpose
>;

export type PickerGroupThemeVars = {
  pickerGroupBackground?: string;
};
