import { withInstall } from '../utils';
import _FloatingPanel from './FloatingPanel';

export const FloatingPanel = withInstall(_FloatingPanel);
export default FloatingPanel;
export { floatingPanelProps } from './FloatingPanel';
export type { FloatingPanelProps } from './FloatingPanel';

declare module 'vue' {
  export interface GlobalComponents {
    VanFloatingPanel: typeof FloatingPanel;
  }
}
