import { withInstall } from '../utils';
import _ContactEdit from './ContactEdit';

const ContactEdit = withInstall<typeof _ContactEdit>(_ContactEdit);

export default ContactEdit;
export { ContactEdit };
export type { ContactEditInfo } from './ContactEdit';
