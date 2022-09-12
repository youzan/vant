import type { ComponentPublicInstance, ComputedRef } from 'vue';
import type { Numeric } from '../utils';
import type { TabsProps } from './Tabs';

export type TabsType = 'line' | 'card';

export type TabsClickTabEventParams = {
  name: Numeric;
  title: string;
  event: MouseEvent;
  disabled: boolean;
};

export type TabsProvide = {
  id: string;
  props: TabsProps;
  setLine: () => void;
  onRendered: (name: Numeric, title?: string) => void;
  scrollIntoView: (immediate?: boolean) => void;
  currentName: ComputedRef<Numeric | undefined>;
};

export type TabsExpose = {
  resize: () => void;
  scrollTo: (name: Numeric) => void;
};

export type TabsInstance = ComponentPublicInstance<TabsProps, TabsExpose>;

export type TabsThemeVars = {
  tabTextColor?: string;
  tabActiveTextColor?: string;
  tabDisabledTextColor?: string;
  tabFontSize?: string;
  tabLineHeight?: number | string;
  tabsDefaultColor?: string;
  tabsLineHeight?: number | string;
  tabsCardHeight?: string;
  tabsNavBackground?: string;
  tabsBottomBarWidth?: string;
  tabsBottomBarHeight?: string;
  tabsBottomBarColor?: string;
};
