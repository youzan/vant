/**
 * add Vue-Router support
 */

export default {
  props: {
    url: String,
    replace: Boolean,
    to: [String, Object]
  },

  methods: {
    routerLink() {
      const { to, url, $router, replace } = this;
      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
};
