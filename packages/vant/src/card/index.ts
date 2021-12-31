import { withInstall } from '../utils';
import _Card from './Card';

export const Card = withInstall(_Card);
export default Card;
export type { CardProps } from './Card';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanCard: typeof Card;
  }
}
