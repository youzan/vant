/**
 * The z-index of Popup components.

 * Will affect this components:
 *   - ActionSheet
 *   - Calendar
 *   - Dialog
 *   - DropdownItem
 *   - ImagePreview
 *   - Notify
 *   - Popup
 *   - Popover
 *   - ShareSheet
 *   - Toast
 */
let globalZIndex = 2000;

/** the global z-index is automatically incremented after reading */
export const useGlobalZIndex = () => ++globalZIndex;

/** reset the global z-index */
export const setGlobalZIndex = (val: number) => {
  globalZIndex = val;
};
