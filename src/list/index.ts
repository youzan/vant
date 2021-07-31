import { withInstall } from '../utils';
import _List from './List';

const List = withInstall<typeof _List>(_List);

export default List;
export { List };
export type { ListInstance, ListDirection } from './types';
