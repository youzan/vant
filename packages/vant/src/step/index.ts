import { withInstall } from '../utils';
import _Step from './Step';

export const Step = withInstall(_Step);
export default Step;

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanStep: typeof Step;
  }
}
