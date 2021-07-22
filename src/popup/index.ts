import { withInstall } from '../utils';
import _Popup from './Popup';

const Popup = withInstall<typeof _Popup>(_Popup);

export default Popup;
export { Popup };
export type { PopupPosition, PopupCloseIconPosition } from './Popup';
