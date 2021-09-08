import type { ComponentPublicInstance, ComputedRef, Ref } from 'vue';
import type { CalendarProps } from './Calendar';
import type { CalendarMonthProps } from './CalendarMonth';

export type CalendarType = 'single' | 'range' | 'multiple';

export type CalendarDayType =
  | ''
  | 'start'
  | 'start-end'
  | 'middle'
  | 'end'
  | 'selected'
  | 'multiple-middle'
  | 'multiple-selected'
  | 'disabled'
  | 'placeholder';

export type CalendarDayItem = {
  date?: Date;
  text?: string | number;
  type?: CalendarDayType;
  topInfo?: string;
  className?: unknown;
  bottomInfo?: string;
};

export type CalendarExpose = {
  reset: (date?: Date | Date[]) => void;
  scrollToDate: (targetDate: Date) => void;
};

export type CalendarInstance = ComponentPublicInstance<
  CalendarProps,
  CalendarExpose
>;

export type CalendarMonthInstance = ComponentPublicInstance<
  CalendarMonthProps,
  {
    showed?: boolean;
    getTitle: () => any;
    getHeight: () => number;
    setVisible: (value?: boolean | undefined) => void;
    scrollIntoView: (body: Element) => void;
    disabledDays: Ref<ComputedRef<CalendarDayItem[]>>;
  }
>;
