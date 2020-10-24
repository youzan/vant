import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';
import { useExpose } from '../composition/use-expose';

const [createComponent, bem] = createNamespace('form');

export const FORM_KEY = 'vanForm';

export default createComponent({
  props: {
    colon: Boolean,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    errorMessageAlign: String,
    submitOnEnter: {
      type: Boolean,
      default: true,
    },
    validateTrigger: {
      type: String,
      default: 'onBlur',
    },
    showError: {
      type: Boolean,
      default: true,
    },
    showErrorMessage: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['submit', 'failed'],

  setup(props, { emit, slots }) {
    const { children, linkChildren } = useChildren(FORM_KEY);

    const validateSeq = () =>
      new Promise((resolve, reject) => {
        const errors = [];

        children
          .reduce(
            (promise, field) =>
              promise.then(() => {
                if (!errors.length) {
                  return field.validate().then((error) => {
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

    const validateAll = () =>
      new Promise((resolve, reject) => {
        Promise.all(children.map((item) => item.validate())).then((errors) => {
          errors = errors.filter((item) => item);

          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });

    const validateField = (name) => {
      const matched = children.filter((item) => item.name === name);

      if (matched.length) {
        return new Promise((resolve, reject) => {
          matched[0].validate().then((error) => {
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

    const validate = (name) => {
      if (name) {
        return validateField(name);
      }
      return props.validateFirst ? validateSeq() : validateAll();
    };

    const resetValidation = (name) => {
      children.forEach((item) => {
        if (!name || item.name === name) {
          item.resetValidation();
        }
      });
    };

    const scrollToField = (name, options) => {
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
      }, {});

    const submit = () => {
      const values = getValues();

      validate()
        .then(() => {
          emit('submit', values);
        })
        .catch((errors) => {
          emit('failed', { values, errors });

          if (props.scrollToError) {
            scrollToField(errors[0].name);
          }
        });
    };

    const onSubmit = (event) => {
      event.preventDefault();
      submit();
    };

    linkChildren({ props });
    useExpose({
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
