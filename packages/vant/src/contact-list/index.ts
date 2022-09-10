import { withInstall } from '../utils';
import _ContactList from './ContactList';

export const ContactList = withInstall(_ContactList);
export default ContactList;
export { contactListProps } from './ContactList';
export type { ContactListItem, ContactListProps } from './ContactList';

declare module 'vue' {
  export interface GlobalComponents {
    VanContactList: typeof ContactList;
  }
}
