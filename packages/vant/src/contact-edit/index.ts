import { withInstall } from '../utils';
import _ContactEdit from './ContactEdit';

export const ContactEdit = withInstall(_ContactEdit);
export default ContactEdit;
export { contactEditProps } from './ContactEdit';
export type { ContactEditInfo, ContactEditProps } from './ContactEdit';
export type { ContactEditThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanContactEdit: typeof ContactEdit;
  }
}
