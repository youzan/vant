import { withInstall } from '../utils';
import _Loading from './Loading';

const Loading = withInstall<typeof _Loading>(_Loading);

export default Loading;
export { Loading };
export type { LoadingType } from './Loading';
