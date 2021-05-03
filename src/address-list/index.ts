import { withInstall } from '../utils';
import _AddressList from './AddressList';

const AddressList = withInstall<typeof _AddressList>(_AddressList);

export default AddressList;
export { AddressList };
export type { AddressListAddress } from './AddressListItem';
