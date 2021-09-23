import { withInstall } from '../utils';
import _Field, { FieldProps } from './Field';

export const Field = withInstall(_Field);
export default Field;
export type { FieldProps };
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
