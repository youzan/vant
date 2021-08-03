import { withInstall } from '../utils';
import _Tabs from './Tabs';

const Tabs = withInstall<typeof _Tabs>(_Tabs);

export default Tabs;
export { Tabs };
export type { TabsType, TabsInstance } from './types';
