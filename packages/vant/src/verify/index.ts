import { withInstall } from '../utils';
import _Verify from './Verify';

export const Verify = withInstall(_Verify);
export default Verify;
export { sliderVerifyProps } from './Verify';

declare module 'vue' {
  export interface GlobalComponents {
    VanVerify: typeof Verify;
  }
}
