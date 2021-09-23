import { withInstall } from '../utils';
import _NoticeBar, { NoticeBarProps } from './NoticeBar';

export const NoticeBar = withInstall(_NoticeBar);
export default NoticeBar;
export type { NoticeBarProps };
export type { NoticeBarMode, NoticeBarInstance } from './types';
