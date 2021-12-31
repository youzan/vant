import { withInstall } from '../utils';
import _Pagination from './Pagination';

export const Pagination = withInstall(_Pagination);
export default Pagination;
export type { PaginationMode, PaginationProps } from './Pagination';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanPagination: typeof Pagination;
  }
}
