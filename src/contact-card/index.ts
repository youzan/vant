import { withInstall } from '../utils';
import _ContactCard from './ContactCard';

const ContactCard = withInstall<typeof _ContactCard>(_ContactCard);

export default ContactCard;
export { ContactCard };
export type { ContactCardType } from './ContactCard';
