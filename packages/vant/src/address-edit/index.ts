import { withInstall } from '../utils';
import _AddressEdit, { AddressEditProps } from './AddressEdit';

export const AddressEdit = withInstall(_AddressEdit);
export default AddressEdit;
export { addressEditProps } from './AddressEdit';
export type { AddressEditProps };
export type {
  AddressEditInfo,
  AddressEditInstance,
  AddressEditThemeVars,
  AddressEditSearchItem,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanAddressEdit: typeof AddressEdit;
  }
}
