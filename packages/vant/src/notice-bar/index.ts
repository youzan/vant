import { withInstall } from '../utils';
import _NoticeBar, { NoticeBarProps } from './NoticeBar';

export const NoticeBar = withInstall(_NoticeBar);
export default NoticeBar;
export { noticeBarProps } from './NoticeBar';
export type { NoticeBarProps };
export type {
  NoticeBarMode,
  NoticeBarInstance,
  NoticeBarThemeVars,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanNoticeBar: typeof NoticeBar;
  }
}
