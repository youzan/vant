import { withInstall } from '../utils';
import _NoticeBar from './NoticeBar';

export const NoticeBar = withInstall(_NoticeBar);
export default NoticeBar;
export type { NoticeBarMode, NoticeBarInstance } from './types';
