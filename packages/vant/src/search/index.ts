import { withInstall } from '../utils';
import _Search, { SearchProps } from './Search';

export const Search = withInstall(_Search);
export default Search;
export { searchProps } from './Search';
export type { SearchProps };
export type { SearchShape, SearchInstance, SearchThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanSearch: typeof Search;
  }
}
