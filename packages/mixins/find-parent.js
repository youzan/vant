/**
 * find parent component by name
 */

export const FindParentMixin = {
  data() {
    return {
      parent: null
    };
  },

  methods: {
    findParent(name) {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }
        parent = parent.$parent;
      }
    }
  }
};
