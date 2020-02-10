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
      return this.fields.map(item => item.validate()).every(item => item);
    },

    getFormData() {
      return this.fields.reduce((form, field) => {
        form[field.name] = field.formValue;
        return form;
      }, {});
    },

    onSubmit(event) {
      event.preventDefault();

      const valid = this.validate();

      if (valid) {
        this.$emit('submit', this.getFormData());
      } else {
        this.$emit('failed');
      }
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
