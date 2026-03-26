import { withInstall } from '../utils';
import _Popup from './Popup';

export const Popup = withInstall(_Popup);
export default Popup;
export { popupProps } from './Popup';
export {
  useGlobalZIndex,
  setGlobalZIndex,
} from '../composables/use-global-z-index';
export type { PopupProps } from './Popup';
export type {
  PopupPosition,
  PopupInstance,
  PopupThemeVars,
  PopupCloseIconPosition,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanPopup: typeof Popup;
  }
}
