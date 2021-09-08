/* eslint-disable camelcase */
import type { ComponentPublicInstance } from 'vue';
import type { AreaProps } from './Area';

export type AreaList = {
  city_list: Record<string, string>;
  county_list: Record<string, string>;
  province_list: Record<string, string>;
};

export type AreaColumnOption = {
  name: string;
  code: string;
};

export type AreaColumnType = 'province' | 'county' | 'city';

export type AreaExpose = {
  reset: (newCode?: string) => void;
  getArea: () => {
    code: string;
    country: string;
    province: string;
    city: string;
    county: string;
  };
  getValues: () => AreaColumnOption[];
};

export type AreaInstance = ComponentPublicInstance<AreaProps, AreaExpose>;
