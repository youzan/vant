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
