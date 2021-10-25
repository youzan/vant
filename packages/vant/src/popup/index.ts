import { withInstall } from '../utils';
import _Popup from './Popup';

export const Popup = withInstall(_Popup);
export default Popup;
export type {
  PopupProps,
  PopupPosition,
  PopupCloseIconPosition,
} from './Popup';
