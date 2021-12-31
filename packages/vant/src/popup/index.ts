import { withInstall } from '../utils';
import _Popup from './Popup';

export const Popup = withInstall(_Popup);
export default Popup;
export type { PopupProps } from './Popup';
export type {
  PopupPosition,
  PopupInstance,
  PopupCloseIconPosition,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanPopup: typeof Popup;
  }
}
