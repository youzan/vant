import type { ComponentPublicInstance, ComputedRef } from 'vue';
import type { TabsProps } from './Tabs';

export type TabsType = 'line' | 'card';

export type TabsClickTabEventParams = {
  name: string | number;
  title: string;
  event: MouseEvent;
  disabled: boolean;
};

export type TabsProvide = {
  props: TabsProps;
  setLine: () => void;
  onRendered: (name: string | number, title?: string) => void;
  scrollIntoView: (immediate?: boolean) => void;
  currentName: ComputedRef<number | string | undefined>;
};

export type TabsExpose = {
  resize: () => void;
  scrollTo: (name: number | string) => void;
};

export type TabsInstance = ComponentPublicInstance<TabsProps, TabsExpose>;
