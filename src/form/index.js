// Utils
import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('form');

export default createComponent({
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
    // @exposed-api
    validate() {
      return new Promise((resolve, reject) => {
        Promise.all(this.fields.map(item => item.validate())).then(errors => {
          errors = errors.filter(item => item);

          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
    },

    getValues() {
      return this.fields.reduce((form, field) => {
        form[field.name] = field.formValue;
        return form;
      }, {});
    },

    onSubmit(event) {
      event.preventDefault();

      const values = this.getValues();

      this.validate()
        .then(() => {
          this.$emit('submit', values);
        })
        .catch(errors => {
          this.$emit('failed', {
            values,
            errors,
          });
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
