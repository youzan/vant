import { withInstall } from '../utils';
import _Popover from './Popover';

export const Popover = withInstall(_Popover);
export default Popover;
export type { PopoverProps } from './Popover';
export type {
  PopoverTheme,
  PopoverAction,
  PopoverTrigger,
  PopoverPlacement,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanPopover: typeof Popover;
  }
}
