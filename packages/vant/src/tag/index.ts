import { withInstall } from '../utils';
import _Tag from './Tag';

export const Tag = withInstall(_Tag);
export default Tag;
export { tagProps } from './Tag';
export type { TagProps } from './Tag';
export type { TagSize, TagType, TagThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanTag: typeof Tag;
  }
}
