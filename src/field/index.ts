import { withInstall } from '../utils';
import _Field from './Field';

const Field = withInstall<typeof _Field>(_Field);

export default Field;
export { Field };
export type {
  FieldType,
  FieldRule,
  FieldInstance,
  FieldTextAlign,
  FieldClearTrigger,
  FieldFormatTrigger,
  FieldValidateError,
  FieldAutosizeConfig,
  FieldValidateTrigger,
} from './types';
