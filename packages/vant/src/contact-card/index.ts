import { withInstall } from '../utils';
import _ContactCard from './ContactCard';

export const ContactCard = withInstall(_ContactCard);
export default ContactCard;
export { contactCardProps } from './ContactCard';
export type { ContactCardType, ContactCardProps } from './ContactCard';
export type { ContactCardThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanContactCard: typeof ContactCard;
  }
}
