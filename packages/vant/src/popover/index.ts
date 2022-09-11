import { withInstall } from '../utils';
import _Popover from './Popover';

export const Popover = withInstall(_Popover);
export default Popover;
export { popoverProps } from './Popover';
export type { PopoverProps } from './Popover';
export type {
  PopoverTheme,
  PopoverAction,
  PopoverTrigger,
  PopoverThemeVars,
  PopoverPlacement,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanPopover: typeof Popover;
  }
}
