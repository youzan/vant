import { withInstall } from '../utils';
import _FloatingPanel, { FloatingPanelProps } from './FloatingPanel';

export const FloatingPanel = withInstall(_FloatingPanel);

export default FloatingPanel;

export type { FloatingPanelProps };

declare module 'vue' {
  export interface GlobalComponents {
    VanFloatingPanel: typeof FloatingPanel;
  }
}
