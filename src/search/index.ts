import { withInstall } from '../utils';
import _Search from './Search';

const Search = withInstall<typeof _Search>(_Search);

export default Search;
export { Search };
export type { SearchShape, SearchInstance } from './types';
