import { withInstall } from '../utils';
import _ActionSheet from './ActionSheet';

const ActionSheet = withInstall<typeof _ActionSheet>(_ActionSheet);

export default ActionSheet;
export { ActionSheet };
export type { ActionSheetAction } from './ActionSheet';
