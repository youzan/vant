import { installable } from '../utils';
import _Field from './Field';

const Field = installable(_Field);

export default Field;
export { Field };
export type {
  FieldType,
  FieldRule,
  FieldTextAlign,
  FieldClearTrigger,
  FieldFormatTrigger,
  FieldValidateError,
  FieldAutosizeConfig,
  FieldValidateTrigger,
} from './types';
