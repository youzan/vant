import { withInstall } from '../utils';
import _Form, { FormProps } from './Form';

export const Form = withInstall(_Form);
export default Form;
export type { FormProps };
export type { FormInstance } from './types';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanForm: typeof Form;
  }
}
