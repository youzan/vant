// component mixin
import { get } from '../../../packages/utils';
import { camelize } from '../../../packages/utils/format/string';

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
