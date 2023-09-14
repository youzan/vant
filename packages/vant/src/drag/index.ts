import { withInstall } from '../utils';
import _Drag from './Drag';

export const Drag = withInstall(_Drag);
export default Drag;
export { dragProps } from './Drag';
export type { DragProps } from './Drag';

declare module 'vue' {
  export interface GlobalComponents {
    VanDrag: typeof Drag;
  }
}
