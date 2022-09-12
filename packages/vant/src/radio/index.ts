import { withInstall } from '../utils';
import _Radio from './Radio';

export const Radio = withInstall(_Radio);
export default Radio;
export { radioProps } from './Radio';
export type { RadioProps, RadioShape, RadioLabelPosition } from './Radio';
export type { RadioThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanRadio: typeof Radio;
  }
}
