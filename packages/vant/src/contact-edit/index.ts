import { withInstall } from '../utils';
import _ContactEdit from './ContactEdit';

export const ContactEdit = withInstall(_ContactEdit);
export default ContactEdit;
export type { ContactEditInfo, ContactEditProps } from './ContactEdit';

declare module 'vue' {
  export interface GlobalComponents {
    VanContactEdit: typeof ContactEdit;
  }
}
