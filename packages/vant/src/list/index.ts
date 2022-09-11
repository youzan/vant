import { withInstall } from '../utils';
import _List, { ListProps } from './List';

export const List = withInstall(_List);
export default List;
export { listProps } from './List';
export type { ListProps };
export type { ListInstance, ListDirection, ListThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanList: typeof List;
  }
}
