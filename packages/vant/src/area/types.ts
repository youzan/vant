/* eslint-disable camelcase */
import type { ComponentPublicInstance } from 'vue';
import { PickerExpose } from '../picker/types';
import type { AreaProps } from './Area';

export type AreaList = {
  city_list: Record<string, string>;
  county_list: Record<string, string>;
  province_list: Record<string, string>;
};

export type AreaInstance = ComponentPublicInstance<AreaProps, PickerExpose>;
