import { withInstall } from '../utils';
import _ContactList from './ContactList';

const ContactList = withInstall<typeof _ContactList>(_ContactList);

export default ContactList;
export { ContactList };
export type { ContactListItem } from './ContactList';
