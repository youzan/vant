import type { ComponentPublicInstance } from 'vue';
import type { AddressEditProps } from './AddressEdit';

export type AddressEditSearchItem = {
  name?: string;
  address?: string;
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
  addressDetail: string;
};

export type AddressEditExpose = {
  setAreaCode: (code?: string | undefined) => void;
  setAddressDetail: (value: string) => void;
};

export type AddressEditInstance = ComponentPublicInstance<
  AddressEditProps,
  AddressEditExpose
>;

export type AddressEditThemeVars = {
  addressEditPadding?: string;
  addressEditButtonsPadding?: string;
  addressEditButtonMarginBottom?: string;
  addressEditButtonFontSize?: string;
};
