import { withInstall } from '../utils';
import _Tag from './Tag';

export const Tag = withInstall(_Tag);
export default Tag;
export type { TagSize, TagType, TagProps } from './Tag';
