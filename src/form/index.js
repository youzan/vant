import { createNamespace } from '../utils';
import { sortChildren } from '../utils/vnodes';

const [createComponent, bem] = createNamespace('form');

export default createComponent({
  props: {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
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

  provide() {
    return {
      vanForm: this,
    };
  },

  data() {
    return {
      fields: [],
    };
  },

  methods: {
    getFieldsByNames(names) {
      if (names) {
        return this.fields.filter((field) => names.indexOf(field.name) !== -1);
      }
      return this.fields;
    },

    validateSeq(names) {
      return new Promise((resolve, reject) => {
        const errors = [];
        const fields = this.getFieldsByNames(names);

        fields
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
    },

    validateFields(names) {
      return new Promise((resolve, reject) => {
        const fields = this.getFieldsByNames(names);
        Promise.all(fields.map((item) => item.validate())).then((errors) => {
          errors = errors.filter((item) => item);

          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
    },

    // @exposed-api
    validate(name) {
      if (name && !Array.isArray(name)) {
        return this.validateField(name);
      }
      return this.validateFirst
        ? this.validateSeq(name)
        : this.validateFields(name);
    },

    validateField(name) {
      const matched = this.fields.filter((item) => item.name === name);

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
    },

    // @exposed-api
    resetValidation(name) {
      if (name && !Array.isArray(name)) {
        name = [name];
      }

      const fields = this.getFieldsByNames(name);
      fields.forEach((item) => {
        item.resetValidation();
      });
    },

    // @exposed-api
    scrollToField(name, options) {
      this.fields.some((item) => {
        if (item.name === name) {
          item.$el.scrollIntoView(options);
          return true;
        }
        return false;
      });
    },

    addField(field) {
      this.fields.push(field);
      sortChildren(this.fields, this);
    },

    removeField(field) {
      this.fields = this.fields.filter((item) => item !== field);
    },

    getValues() {
      return this.fields.reduce((form, field) => {
        form[field.name] = field.formValue;
        return form;
      }, {});
    },

    onSubmit(event) {
      event.preventDefault();
      this.submit();
    },

    // @exposed-api
    submit() {
      const values = this.getValues();

      this.validate()
        .then(() => {
          this.$emit('submit', values);
        })
        .catch((errors) => {
          this.$emit('failed', {
            values,
            errors,
          });

          if (this.scrollToError) {
            this.scrollToField(errors[0].name);
          }
        });
    },
  },

  render() {
    return (
      <form class={bem()} onSubmit={this.onSubmit}>
        {this.slots()}
      </form>
    );
  },
});
