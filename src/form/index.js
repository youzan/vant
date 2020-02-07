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
    onSubmit(event) {
      event.preventDefault();

      const results = this.fields.map(item => item.validate());

      console.log(results);
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
