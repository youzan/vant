import { withInstall } from '../utils';
import _Signature from './Signature';

export const Signature = withInstall(_Signature);
export default Signature;
export type { SignatureProps } from './Signature';
export type { SignatureInstance, SignatureThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    Signature: typeof Signature;
  }
}
