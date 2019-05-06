export function ChildrenMixin(parent) {
  return {
    inject: [parent],

    computed: {
      parent() {
        return this[parent];
      }
    },

    created() {
      const { children } = this.parent;
      const index = this.parent.slots().indexOf(this.$vnode);
      children.splice(index === -1 ? children.length : index, 0, this);
    },

    beforeDestroy() {
      this.parent.children = this.parent.children.filter(item => item !== this);
    }
  };
}

export function ParentMixin(parent) {
  return {
    provide() {
      return {
        [parent]: this
      };
    },

    data() {
      return {
        children: []
      };
    }
  };
}
