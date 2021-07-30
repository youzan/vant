import { withInstall } from '../utils';
import _Form from './Form';

const Form = withInstall<typeof _Form>(_Form);

export default Form;
export { Form };
export type { FormInstance } from './types';
