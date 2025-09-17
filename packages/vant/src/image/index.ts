import { withInstall } from '../utils';
import _Image from './Image';

export const Image = withInstall(_Image);
export default Image;
export { imageProps } from './Image';
export type { ImageProps } from './Image';
export type { ImageFit, ImagePosition, ImageThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanImage: typeof Image;
  }
}
