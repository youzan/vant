import type { ComponentPublicInstance } from 'vue';
import type { AreaColumnOption } from '../area';
import type { AddressEditProps } from './AddressEdit';

export type AddressEditSearchItem = {
  name: string;
  address: string;
};

export type AddressEditInfo = {
  tel: string;
  name: string;
  city: string;
  county: string;
  country: string;
  province: string;
  areaCode: string;
  isDefault?: boolean;
  postalCode?: string;
  addressDetail: string;
};

export type AddressEditExpose = {
  getArea: () => AreaColumnOption[];
  setAreaCode: (code?: string | undefined) => void;
  setAddressDetail: (value: string) => void;
};

export type AddressEditInstance = ComponentPublicInstance<
  AddressEditProps,
  AddressEditExpose
>;
