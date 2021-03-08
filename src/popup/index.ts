import { installable } from '../utils';
import _Popup from './Popup';

const Popup = installable(_Popup);

export default Popup;
export { Popup };
export type { PopupPosition, PopupCloseIconPosition } from './Popup';
