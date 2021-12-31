import { withInstall } from '../utils';
import _ContactCard from './ContactCard';

export const ContactCard = withInstall(_ContactCard);
export default ContactCard;
export type { ContactCardType, ContactCardProps } from './ContactCard';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanContactCard: typeof ContactCard;
  }
}
