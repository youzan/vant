import { withInstall } from '../utils';
import _Slider from './Slider';

export const Slider = withInstall(_Slider);
export default Slider;
export { sliderProps } from './Slider';
export type { SliderProps } from './Slider';
export type { SliderThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanSlider: typeof Slider;
  }
}
