import { withInstall } from '../utils';
import _AddressEdit from './AddressEdit';

export const AddressEdit = withInstall(_AddressEdit);
export default AddressEdit;
export type {
  AddressEditInfo,
  AddressEditInstance,
  AddressEditSearchItem,
} from './types';
