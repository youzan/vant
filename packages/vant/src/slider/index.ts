import { withInstall } from '../utils';
import _Slider from './Slider';

export const Slider = withInstall(_Slider);
export default Slider;
export type { SliderProps } from './Slider';

declare module 'vue' {
  export interface GlobalComponents {
    VanSlider: typeof Slider;
  }
}
