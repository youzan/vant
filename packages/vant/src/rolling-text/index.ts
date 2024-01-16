import { withInstall } from '../utils';
import _RollingText from './RollingText';
import _RollingTextItem from './RollingTextItem';
import _RollingTextGroup from './RollingTextGroup';

export const RollingText = withInstall(_RollingText);
export const RollingTextItem = withInstall(_RollingTextItem);
export const RollingTextGroup = withInstall(_RollingTextGroup);
export default RollingText;
export { rollingTextProps } from './RollingText';
export type { RollingTextProps } from './RollingText';
export type {
  RollingTextDirection,
  RollingTextInstance,
  RollingTextStopOrder,
  RollingTextThemeVars,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanRollingText: typeof _RollingText;
    VanRollingTextItem: typeof _RollingTextItem;
    VanRollingTextGroup: typeof _RollingTextGroup;
  }
}
