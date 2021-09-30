import { PropType, defineComponent, ExtractPropTypes } from 'vue';

// Utils
import {
  FORM_KEY,
  truthProp,
  numericProp,
  makeStringProp,
  createNamespace,
} from '../utils';

// Composables
import { useChildren } from '@vant/use';
import { useExpose } from '../composables/use-expose';

// Types
import type {
  FieldTextAlign,
  FieldValidateError,
  FieldValidateTrigger,
} from '../field/types';
import type { FormExpose } from './types';

const [name, bem] = createNamespace('form');

const props = {
  colon: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  showError: Boolean,
  labelWidth: numericProp,
  labelAlign: String as PropType<FieldTextAlign>,
  inputAlign: String as PropType<FieldTextAlign>,
  scrollToError: Boolean,
  validateFirst: Boolean,
  submitOnEnter: truthProp,
  validateTrigger: makeStringProp<FieldValidateTrigger>('onBlur'),
  showErrorMessage: truthProp,
  errorMessageAlign: String as PropType<FieldTextAlign>,
};

export type FormProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

  emits: ['submit', 'failed'],

  setup(props, { emit, slots }) {
    const { children, linkChildren } = useChildren(FORM_KEY);

    const getFieldsByNames = (names?: string[]) => {
      if (names) {
        return children.filter((field) => names.includes(field.name));
      }
      return children;
    };

    const validateSeq = (names?: string[]) =>
      new Promise<void>((resolve, reject) => {
        const errors: FieldValidateError[] = [];
        const fields = getFieldsByNames(names);

        fields
          .reduce(
            (promise, field) =>
              promise.then(() => {
                if (!errors.length) {
                  return field.validate().then((error?: FieldValidateError) => {
                    if (error) {
                      errors.push(error);
                    }
                  });
                }
              }),
            Promise.resolve()
          )
          .then(() => {
            if (errors.length) {
              reject(errors);
            } else {
              resolve();
            }
          });
      });

    const validateAll = (names?: string[]) =>
      new Promise<void>((resolve, reject) => {
        const fields = getFieldsByNames(names);
        Promise.all(fields.map((item) => item.validate())).then((errors) => {
          errors = errors.filter(Boolean);

          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });

    const validateField = (name: string) => {
      const matched = children.find((item) => item.name === name);

      if (matched) {
        return new Promise<void>((resolve, reject) => {
          matched.validate().then((error?: FieldValidateError) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
      }

      return Promise.reject();
    };

    const validate = (name?: string | string[]) => {
      if (typeof name === 'string') {
        return validateField(name);
      }
      return props.validateFirst ? validateSeq(name) : validateAll(name);
    };

    const resetValidation = (name?: string | string[]) => {
      if (typeof name === 'string') {
        name = [name];
      }

      const fields = getFieldsByNames(name);
      fields.forEach((item) => {
        item.resetValidation();
      });
    };

    const scrollToField = (
      name: string,
      options?: boolean | ScrollIntoViewOptions
    ) => {
      children.some((item) => {
        if (item.name === name) {
          item.$el.scrollIntoView(options);
          return true;
        }
        return false;
      });
    };

    const getValues = () =>
      children.reduce((form, field) => {
        form[field.name] = field.formValue.value;
        return form;
      }, {} as Record<string, unknown>);

    const submit = () => {
      const values = getValues();

      validate()
        .then(() => emit('submit', values))
        .catch((errors: FieldValidateError[]) => {
          emit('failed', { values, errors });

          if (props.scrollToError && errors[0].name) {
            scrollToField(errors[0].name);
          }
        });
    };

    const onSubmit = (event: Event) => {
      event.preventDefault();
      submit();
    };

    linkChildren({ props });
    useExpose<FormExpose>({
      submit,
      validate,
      scrollToField,
      resetValidation,
    });

    return () => (
      <form class={bem()} onSubmit={onSubmit}>
        {slots.default?.()}
      </form>
    );
  },
});
