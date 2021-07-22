import { withInstall } from '../utils';
import _Pagination from './Pagination';

const Pagination = withInstall<typeof _Pagination>(_Pagination);

export default Pagination;
export { Pagination };
export type { PaginationMode } from './Pagination';
