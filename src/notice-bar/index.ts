import { withInstall } from '../utils';
import _NoticeBar from './NoticeBar';

const NoticeBar = withInstall<typeof _NoticeBar>(_NoticeBar);

export default NoticeBar;
export { NoticeBar };
export type { NoticeBarMode, NoticeBarInstance } from './types';
