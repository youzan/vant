import { withInstall } from '../utils';
import _Card from './Card';

export const Card = withInstall(_Card);
export default Card;
export { cardProps } from './Card';
export type { CardProps } from './Card';
export type { CardThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCard: typeof Card;
  }
}
