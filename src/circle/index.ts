import { withInstall } from '../utils';
import _Circle from './Circle';

const Circle = withInstall<typeof _Circle>(_Circle);

export default Circle;
export { Circle };
