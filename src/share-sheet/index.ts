import { withInstall } from '../utils';
import _ShareSheet from './ShareSheet';

const ShareSheet = withInstall<typeof _ShareSheet>(_ShareSheet);

export default ShareSheet;
export { ShareSheet };
export type { ShareSheetOption, ShareSheetOptions } from './ShareSheet';
