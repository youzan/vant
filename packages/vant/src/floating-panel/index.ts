import { withInstall } from '../utils';
import _FloatingPanel from './FloatingPanel';

export const FloatingPanel = withInstall(_FloatingPanel);
export default FloatingPanel;
export { floatingPanelProps } from './FloatingPanel';
export type { FloatingPanelProps } from './FloatingPanel';
export type { FloatingPanelThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanFloatingPanel: typeof FloatingPanel;
  }
}
