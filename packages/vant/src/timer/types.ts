import type { ComponentPublicInstance } from 'vue';
import type { CurrentTime } from '@vant/use';
import type { TimerProps } from './Timer';

type TimerExpose = {
  start: () => void;
  pause: () => void;
  reset: () => void;
};

export type TimerInstance = ComponentPublicInstance<TimerProps, TimerExpose>;

export type TimerCurrentTime = CurrentTime;

export type TimerThemeVars = {
  timerTextColor?: string;
  timerFontSize?: string;
  timerLineHeight?: number | string;
};
