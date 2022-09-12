import type { ComponentPublicInstance } from 'vue';
import type { NoticeBarProps } from './NoticeBar';

export type NoticeBarMode = 'closeable' | 'link';

export type NoticeBarExpose = {
  reset: () => void;
};

export type NoticeBarInstance = ComponentPublicInstance<
  NoticeBarProps,
  NoticeBarExpose
>;

export type NoticeBarThemeVars = {
  noticeBarHeight?: string;
  noticeBarPadding?: string;
  noticeBarWrapablePadding?: string;
  noticeBarTextColor?: string;
  noticeBarFontSize?: string;
  noticeBarLineHeight?: number | string;
  noticeBarBackground?: string;
  noticeBarIconSize?: string;
  noticeBarIconMinWidth?: string;
};
