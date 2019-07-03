// component mixin
import { get } from '../../../src/utils';
import { camelize } from '../../../src/utils/format/string';

export default {
  computed: {
    $t() {
      const { name } = this.$options;
      const prefix = name ? camelize(name) + '.' : '';
      const messages = this.$vantMessages[this.$vantLang];

      return (path, ...args) => {
        const message = get(messages, prefix + path) || get(messages, path);
        return typeof message === 'function' ? message(...args) : message;
      };
    }
  }
};
