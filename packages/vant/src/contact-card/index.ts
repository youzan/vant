import { withInstall } from '../utils';
import _ContactCard from './ContactCard';

export const ContactCard = withInstall(_ContactCard);
export default ContactCard;
export type { ContactCardType, ContactCardProps } from './ContactCard';

declare module 'vue' {
  export interface GlobalComponents {
    VanContactCard: typeof ContactCard;
  }
}
