import { withInstall } from '../utils';
import _AddressList from './AddressList';

export const AddressList = withInstall(_AddressList);
export default AddressList;
export type { AddressListAddress } from './AddressListItem';
