/**
 * 根据父组件名找到对应`parent`
 */
export default {
  methods: {
    findParentByComponentName(name) {
      if (this.parentGroup) return;

      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          this.parentGroup = parent;
          break;
        } else {
          parent = parent.$parent;
        }
      }

      return this.parentGroup;
    }
  }
};
