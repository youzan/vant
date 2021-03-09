import { withInstall } from '../utils';
import _GridItem from './GridItem';

const GridItem = withInstall<typeof _GridItem>(_GridItem);

export default GridItem;
export { GridItem };
