import { withInstall } from '../utils';
import _Image from './Image';

export const Image = withInstall(_Image);
export default Image;
export type { ImageFit, ImageProps } from './Image';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanImage: typeof Image;
  }
}
