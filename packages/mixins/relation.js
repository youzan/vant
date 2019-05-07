export function ChildrenMixin(parent) {
  return {
    inject: [parent],

    computed: {
      parent() {
        return this[parent];
      },

      index() {
        this.bindRelation();
        return this.parent.children.indexOf(this);
      }
    },

    created() {
      this.bindRelation();
    },

    beforeDestroy() {
      this.parent.children = this.parent.children.filter(item => item !== this);
    },

    methods: {
      bindRelation() {
        const { children } = this.parent;

        if (children.indexOf(this) === -1) {
          const vnodeIndex = this.parent.slots().indexOf(this.$vnode);

          if (vnodeIndex === -1) {
            children.push(this);
          } else {
            children.splice(vnodeIndex, 0, this);
          }
        }
      }
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
