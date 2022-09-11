import { withInstall } from '../utils';
import _Circle from './Circle';

export const Circle = withInstall(_Circle);
export default Circle;
export { circleProps } from './Circle';
export type { CircleProps, CircleStartPosition } from './Circle';
export type { CircleThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCircle: typeof Circle;
  }
}
