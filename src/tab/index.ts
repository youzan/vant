import { withInstall } from '../utils';
import _Tab from './Tab';

const Tab = withInstall<typeof _Tab>(_Tab);

export default Tab;
export { Tab };
