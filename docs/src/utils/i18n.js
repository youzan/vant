// component mixin
import { get, camelize } from '../../../packages/utils';

export default {
  computed: {
    $t() {
      const { name } = this.$options;
      const prefix = name ? camelize(name) + '.' : '';

      if (!this.$vantMessages) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('[Vant] Locale not correctly registered');
        }
        return () => '';
      }

      const messages = this.$vantMessages[this.$vantLang];
      return (path, ...args) => {
        const message = get(messages, prefix + path) || get(messages, path);
        return typeof message === 'function' ? message(...args) : message;
      };
    }
  }
};
