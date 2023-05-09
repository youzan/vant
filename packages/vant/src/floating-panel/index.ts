import { withInstall } from '../utils';
import _FloatingPanel from './FloatingPanel';

export const FloatingPanel = withInstall(_FloatingPanel);

export default FloatingPanel;

declare module 'vue' {
  export interface GlobalComponents {
    VanFloatingPanel: typeof FloatingPanel;
  }
}
