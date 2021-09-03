import { withInstall } from '../utils';
import _Search from './Search';

export const Search = withInstall(_Search);
export default Search;
export type { SearchShape, SearchInstance } from './types';
