export function ChildrenMixin(parent, options = {}) {
  const indexKey = options.indexKey || 'index';

  return {
    inject: {
      [parent]: {
        default: null
      }
    },

    computed: {
      parent() {
        return this[parent];
      },

      [indexKey]() {
        this.bindRelation();
        return this.parent.children.indexOf(this);
      }
    },

    created() {
      this.bindRelation();
    },

    beforeDestroy() {
      if (this.parent) {
        this.parent.children = this.parent.children.filter(item => item !== this);
      }
    },

    methods: {
      bindRelation() {
        if (!this.parent) {
          return;
        }

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
