import { withInstall } from '../utils';
import _Pagination from './Pagination';

export const Pagination = withInstall(_Pagination);
export default Pagination;
export { paginationProps } from './Pagination';
export type { PaginationMode, PaginationProps } from './Pagination';
export type { PaginationThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanPagination: typeof Pagination;
  }
}
