import { withInstall } from '../utils';
import _Overlay from './Overlay';

export const Overlay = withInstall(_Overlay);
export default Overlay;
export type { OverlayProps } from './Overlay';

declare module 'vue' {
  export interface GlobalComponents {
    VanOverlay: typeof Overlay;
  }
}
