export function ChildrenMixin(parent) {
  return {
    inject: [parent],

    computed: {
      parent() {
        return this[parent];
      },

      index() {
        return this.parent.children.indexOf(this);
      }
    },

    created() {
      const { children } = this.parent;
      const index = this.parent.slots().indexOf(this.$vnode);

      if (index === -1) {
        children.push(this);
      } else {
        children.splice(index, 0, this);
      }
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
