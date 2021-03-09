import { withInstall } from '../utils';
import _TabbarItem from './TabbarItem';

const TabbarItem = withInstall<typeof _TabbarItem>(_TabbarItem);

export default TabbarItem;
export { TabbarItem };
